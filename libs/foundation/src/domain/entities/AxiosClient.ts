import axios, { AxiosRequestConfig } from 'axios';

import { IApiConfig } from '../interfaces/Api/IApiConfig';

import { ApiService } from './ApiService';

export class AxiosClient {
  private readonly config: AxiosRequestConfig;
  constructor(config?: IApiConfig) {
    this.config = {
      baseURL: config?.baseURL ?? '',
      timeout: config?.timeout ?? 10000,
      headers: config?.headers ?? {},
      responseType: config?.responseType ?? 'json',
    };
  }

  baseUrl(url: string): AxiosClient {
    this.config.baseURL = url;
    return this;
  }

  timeout(timeout: number): AxiosClient {
    this.config.timeout = timeout;
    return this;
  }

  headers(headers: any): AxiosClient {
    this.config.headers = headers;
    return this;
  }

  responseType(
    responseType: 'json' | 'arraybuffer' | 'blob' | 'document' | 'text' | 'stream',
  ): AxiosClient {
    this.config.responseType = responseType;
    return this;
  }
  build(): ApiService {
    return new ApiService(axios.create(this.config));
  }
}
