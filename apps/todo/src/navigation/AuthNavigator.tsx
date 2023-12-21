import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SplashScreen } from '../screens';

export type StackParamsList = {
  Splash: undefined;
};

const Stack = createNativeStackNavigator<StackParamsList>();
function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Splash' component={SplashScreen} />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
