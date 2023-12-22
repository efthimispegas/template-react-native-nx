import { useEffect } from 'react';
import { AuthConfiguration } from 'react-native-app-auth';

import { selectAuthState, selectUserInfoState } from '../../../redux/app';
import { useSelector } from '../../../redux/store';
import { useAuthViewModel } from '../../view-models/App/useAuthViewModel';

export default function useAuthController(config: AuthConfiguration) {
  const [promptAsync, logoutAsync] = useAuthViewModel(config);
  const { data: userInfo, isLoading, error } = useSelector(selectUserInfoState());
  const { data: authData } = useSelector(selectAuthState());

  useEffect(() => {
    promptAsync();
  }, []);

  return {
    userInfo,
    authData,
    isLoading,
    error,
    logoutAsync,
  };
}
