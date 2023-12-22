import { useCallback } from 'react';
import { authorize, logout, LogoutConfiguration, AuthConfiguration } from 'react-native-app-auth';
import Keychain from 'react-native-keychain';

import { authConfig } from '../../../config/global';
import { selectAuthData, setAuthData, setUserInfo } from '../../../redux/app';
import { useDispatch, useSelector } from '../../../redux/store';

export const useAuthViewModel = (
  config: AuthConfiguration,
): [promptAsync: () => Promise<void>, logoutAsync: () => Promise<void>] => {
  const dispatch = useDispatch();
  const { hasLoggedInOnce, idToken } = useSelector(selectAuthData);

  const promptAsync = useCallback(async () => {
    try {
      if (!hasLoggedInOnce) {
        const result = await authorize(config);
        await Keychain.setGenericPassword('accessToken', result.accessToken);

        if (result.accessToken !== null) {
          fetch(config.issuer + '/oauth2/userinfo', {
            method: 'GET',
            headers: {
              Authorization: 'Bearer ' + result.accessToken,
            },
          })
            .then(response => response.json())
            .then(json => {
              dispatch(setUserInfo(json));
            })
            .catch(error => {
              console.error(error);
            });
        }
        dispatch(
          setAuthData({
            hasLoggedInOnce: true,
            ...result,
            idToken: result.tokenAdditionalParameters.refresh_token_id,
          }),
        );
      }
    } catch (error) {
      console.log('Failed to log in', (error as Record<string, never>)?.message);
    }
  }, []);

  const logoutAsync = useCallback(async () => {
    try {
      const logoutConfig: LogoutConfiguration = {
        idToken,
        postLogoutRedirectUrl: '',
      };
      console.log('===============');
      console.log('[logout]:', { logoutConfig });
      console.log('===============');
      if (idToken) {
        const result = await logout(authConfig, logoutConfig);
        dispatch(setUserInfo(null));
        dispatch(setAuthData(null));
        await Keychain.resetGenericPassword({});
        // }
      }
    } catch (error) {
      console.log('Failed to log out', (error as Record<string, never>)?.message);
    }
  }, []);

  return [promptAsync, logoutAsync];
};
