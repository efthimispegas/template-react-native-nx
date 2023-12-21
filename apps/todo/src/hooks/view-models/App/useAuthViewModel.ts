import { useCallback, useEffect } from 'react';
import { authorize, AuthConfiguration } from 'react-native-app-auth';
import Keychain from 'react-native-keychain';

import { selectAuthData, setAuthData, setUserInfo } from '../../../redux/app';
import { useDispatch, useSelector } from '../../../redux/store';

export const useAuthViewModel = (config: AuthConfiguration) => {
  const dispatch = useDispatch();
  const { hasLoggedInOnce } = useSelector(selectAuthData);

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
              // setUserInfo(json);
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
          }),
        );
      }
    } catch (error) {
      console.log('Failed to log in', (error as Record<string, never>)?.message);
    }
  }, []);

  useEffect(() => {
    promptAsync();
  }, []);
};
