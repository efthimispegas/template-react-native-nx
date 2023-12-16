import {
  TypedUseSelectorHook,
  useDispatch as useAppDispatch,
  useSelector as useTypedSelector,
} from 'react-redux';

import type { PreloadedState } from '@reduxjs/toolkit';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { todos } from './todos';

const rootReducer = combineReducers({
  todos,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  devTools: !!(process.env.NODE_ENV && process.env.NODE_ENV === 'development'),
});
export const preloadedStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: !!(process.env.NODE_ENV && process.env.NODE_ENV === 'development'),
    preloadedState,
  });
};

export type AppStore = ReturnType<typeof preloadedStore>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useDispatch: () => AppDispatch = useAppDispatch;
export const useSelector: TypedUseSelectorHook<RootState> = useTypedSelector;
export default store;
