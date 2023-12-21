import React from 'react';
import { AuthConfiguration } from 'react-native-app-auth';

import { NavigationContainer } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import useAuthController from '../hooks/controllers/App/useAuthController';
import { navigationRef } from '../utils/navigation';

import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';

export type StackParamsList = {
  Home: undefined;
  Create: undefined;
  Edit: {
    id: string;
  };
};

export type StackScreenProps<T extends keyof StackParamsList> = NativeStackScreenProps<
  StackParamsList,
  T
>;

// Fusion OAuth configuration
const config: AuthConfiguration = {
  issuer: 'http://localhost:9011/',
  // clientId: 'fc22503d-f7d2-44fc-88cd-d1660b4b5c72',
  clientId: '19b24667-c26f-4609-9a82-727163a05776',
  redirectUrl: 'com.todo.auth://oauth',
  scopes: ['offline_access'],
};
// TODO: Add user info inside the home screen
// TODO: Add logout functionality to header right icon
function RootNavigator() {
  const { authData } = useAuthController(config);

  return (
    <NavigationContainer ref={navigationRef}>
      {authData.accessToken ? <DrawerNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}

export default RootNavigator;
