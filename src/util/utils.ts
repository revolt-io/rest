export const stringifyQuery = (query: Record<string, string>) =>
  Object.entries(query).map(([key, value]) => `${key}=${value}`).join('&');
