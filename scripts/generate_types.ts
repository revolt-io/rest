import type {
  OpenAPI3,
  ReferenceObject,
  SchemaObject,
} from 'https://raw.githubusercontent.com/brecert/revolt-api/main/scripts/types.ts';

const routes: string[] = [];
const OpenAPI: OpenAPI3 = await fetch(
  'https://raw.githubusercontent.com/revoltchat/api/master/OpenAPI.json',
).then((r) => r.json());

function getType(schema: ReferenceObject | SchemaObject): string {
  if (schema == null) return 'undefined';
  if ('$ref' in schema) {
    schema = OpenAPI.components!.schemas![schema.$ref.split('/').pop()!];
  }

  const isReference = (x: unknown): x is ReferenceObject =>
    typeof x === 'object' && '$ref' in x!;

  if (isReference(schema)) return getType(schema);

  const extractedTypes: Record<string, string> = {};

  if (schema.items) return getType(schema.items) + '[]';
  if (schema.allOf) {
    return (schema.allOf as ReferenceObject[]).map((x) => getType(x)).join(
      ' & ',
    );
  }
  if (schema.anyOf) return schema.anyOf.map((x) => getType(x)).join(' | ');
  if (schema.oneOf) return schema.oneOf.map((x) => getType(x)).join(' | ');
  if (schema.enum) return schema.enum.map((e) => `'${e}'`).join(' | ');
  if (
    schema.additionalProperties &&
    typeof schema.additionalProperties !== 'boolean'
  ) {
    return getType(schema.additionalProperties);
  }

  if (schema.properties) {
    for (const [name, prop] of Object.entries(schema.properties)) {
      extractedTypes[schema.required?.includes(name) ? name : `${name}?`] =
        getType(prop);
    }
  }

  if (schema.type === 'integer') schema.type = 'number';
  if (schema.type && Object.keys(extractedTypes).length === 0) {
    extractedTypes.type = schema.type;
    if (schema.nullable) extractedTypes.type += ' | null';
  }

  const keys = Object.keys(extractedTypes);
  const isArray = schema.type === 'array';

  if (keys.length === 1) return extractedTypes[keys[0]] + (isArray ? '[]' : '');

  return '{ ' + keys.map((key) => {
    return `${key}: ${extractedTypes[key]},`;
  }).join(' ') + (isArray ? '[]' : '') + ' }';
}

for (const [path, methods] of Object.entries(OpenAPI.paths!)) {
  for (const [method, data] of Object.entries(methods)) {
    const schema = data.responses['200']?.content?.['application/json']?.schema;
    const typedResponse = getType(schema);
    const typedPath = path.replace(
      /\{(target|id|code|role_id|member|msg|server|message|username|_target)\}/g,
      '${string}',
    );

    const route = `{
            path: \`${typedPath}\`
            parts: ${typedPath.split('/').length - 1}
            method: '${method.toUpperCase()}'
            response: ${typedResponse}
        }`;

    routes.push(route);
  }
}

Deno.writeTextFileSync(
  'src/types/routes.d.ts',
  `
export type Routes = ${routes.join(' | ')}
export type GetRoutes = Extract<Routes, { method: 'GET' }>
export type DeleteRoutes = Extract<Routes, { method: 'DELETE' }>
export type PostRoutes = Extract<Routes, { method: 'POST' }>
export type PatchRoutes = Extract<Routes, { method: 'PATCH' }>
export type PutRoutes = Extract<Routes, { method: 'PUT' }>
`,
);
