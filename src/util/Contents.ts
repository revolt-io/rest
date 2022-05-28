import type { RESTOptions } from '../REST.ts';

export const DEFAULT_REST_OPTIONS: RESTOptions = {
  app: 'https://app.revolt.chat',
  api: 'https://api.revolt.chat',
  cdn: 'https://autumn.revolt.chat',
  retries: 3,
  timeout: 15_000,
};
