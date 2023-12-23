import { IErrorResponse } from './IErrorResponse';

export enum StateEnum {
  Loading,
  Success,
  Error,
}

export interface IResponseState<T> {
  responseState: StateEnum;
  data?: T;
  error?: IErrorResponse;
}
