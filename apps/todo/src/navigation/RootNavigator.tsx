import React from 'react';

import { useFlipper } from '@react-navigation/devtools';
import { NavigationContainer } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { authConfig } from '../config/global';
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

function RootNavigator() {
  const { authData } = useAuthController(authConfig);
  useFlipper(navigationRef);
  return (
    <NavigationContainer ref={navigationRef}>
      {authData.hasLoggedInOnce ? <DrawerNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}

export default RootNavigator;
