import { AxiosRequestConfig } from 'axios';

export interface IApiConfig extends AxiosRequestConfig {
  headers?: any;
  signal?: AbortSignal;
  responseType?: 'json' | 'arraybuffer' | 'blob' | 'document' | 'text' | 'stream';
}
