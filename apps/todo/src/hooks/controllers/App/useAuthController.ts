import { AuthConfiguration } from 'react-native-app-auth';

import { selectAuthState, selectUserInfoState } from '../../../redux/app';
import { useSelector } from '../../../redux/store';
import { useAuthViewModel } from '../../view-models/App/useAuthViewModel';

export default function useAuthController(config: AuthConfiguration) {
  useAuthViewModel(config);
  const { data: userInfo, isLoading, error } = useSelector(selectUserInfoState());
  const { data: authData } = useSelector(selectAuthState());

  return {
    userInfo,
    authData,
    isLoading,
    error,
  };
}
