import { logoutAsync } from './app/thunks';

const apiErrorMiddleware = (store: any) => (next: any) => (action: any) => {
  if (action.type.endsWith('rejected')) {
    if (action.error?.message.includes('401')) {
      // refresh token, onFail logout on error code 401 //TODO: in progress
      store.dispatch(logoutAsync());
    }
    if (action.error?.message.includes('403')) {
      // sign-out on error code 403
      store.dispatch(logoutAsync());
    }
  }
  return next(action);
};

export { apiErrorMiddleware };
