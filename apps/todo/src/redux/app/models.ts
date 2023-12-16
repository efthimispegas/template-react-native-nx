import { IErrorResponse } from '@template-monorepo/foundation';

import { AppDispatch, RootState } from '../store';

export interface ISignal {
  signal: AbortSignal;
}

export interface IThunk {
  state: RootState;
  rejectValue: IErrorResponse;
  dispatch?: AppDispatch;
  fulfilledMeta?: any;
}
