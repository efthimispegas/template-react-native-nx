import axios, { AxiosInstance } from 'axios';

import { IApiEndpoint } from '../interfaces/Api/IApiEndpoint';
import { IResponse } from '../interfaces/Api/IResponse';

export class ApiService {
  private readonly axiosInstance: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }

  public async request<T>(endpoint: IApiEndpoint, requestData?: any): Promise<IResponse<T>> {
    const { url, method } = endpoint;
    try {
      const response = await this.axiosInstance.request<T>({
        url,
        method,
        data: requestData,
      });
      return { isSuccessful: true, body: response.data };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          return {
            isSuccessful: false,
            errorBody: {
              statusCode: error.response.status,
              message: error.message,
            },
          };
        }
        if (error.request) {
          return {
            isSuccessful: false,
            errorBody: {
              statusCode: error.request.status,
              message: error.message,
            },
          };
        }
        return { isSuccessful: false, errorBody: { statusCode: 0, message: error.message } };
      }
      return {
        isSuccessful: false,
        errorBody: { statusCode: 300, message: 'An unexpected error occured' },
      };
    }
  }

  public async get<T>(url: string): Promise<IResponse<T>> {
    return this.request<T>({ url, method: 'get' });
  }

  public async post<T>(url: string, data: any): Promise<IResponse<T>> {
    return this.request<T>({ url, method: 'post' }, data);
  }

  public async put<T>(url: string, data: any): Promise<IResponse<T>> {
    return this.request<T>({ url, method: 'put' }, data);
  }

  public async delete<T>(url: string): Promise<IResponse<T>> {
    return this.request<T>({ url, method: 'delete' });
  }
}
