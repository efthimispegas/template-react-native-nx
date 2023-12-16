import { IErrorResponse } from './IErrorResponse';

export interface IResponse<T> {
  isSuccessful: boolean;
  body?: T;
  errorBody?: IErrorResponse;
}
