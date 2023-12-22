import { FC, useEffect } from 'react';

import { authConfig } from '../../config/global';
import useAuthController from '../../hooks/controllers/App/useAuthController';

const LogoutScreen: FC = () => {
  const { logoutAsync } = useAuthController(authConfig);

  useEffect(() => {
    logoutAsync();
  }, []);

  return null;
};

export default LogoutScreen;
