import { logout, EndSessionResult } from 'react-native-app-auth';
import Keychain from 'react-native-keychain';

import { createAsyncThunk } from '@reduxjs/toolkit';

import { authConfig } from '../../config/global';

import { IThunk } from './models';

export const logoutAsync = createAsyncThunk<EndSessionResult, void, IThunk>(
  'app/logout',
  async (_, thunkApi) => {
    console.log('logging out...');
    const { authData } = thunkApi.getState().appState;
    if (authData.idToken) {
      await Keychain.resetGenericPassword();
      const result = await logout(authConfig, {
        idToken: authData.idToken,
        postLogoutRedirectUrl: authConfig.redirectUrl,
      });
      return result;
    }
  },
);
