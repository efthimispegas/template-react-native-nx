import { AxiosClient, IApiConfig, globals } from '@template-monorepo/core';

export function apiProvider(config: IApiConfig) {
  return new AxiosClient(config)
    .baseUrl(globals.API_BASE_URL)
    .timeout(10000)
    .responseType('json')
    .build();
}
