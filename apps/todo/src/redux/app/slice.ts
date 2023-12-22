import { createSlice } from '@reduxjs/toolkit';

import { InitialState } from './models';

export const initialState: InitialState = {
  authData: {
    hasLoggedInOnce: false,
  },
  userInfo: null,
  isLoading: false,
  error: null,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setAuthData: (state, action) => {
      state.authData = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
      state.isLoading = false;
      state.error = null;
    },
  },
  extraReducers: builder => {},
});

/**
 * export actions
 */
export const { setAuthData, setUserInfo } = appSlice.actions;

export default appSlice.reducer;
