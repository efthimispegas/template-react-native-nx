import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from '../screens';
import CreateTodoScreen from '../screens/CreateTodoScreen';
import EditTodoScreen from '../screens/EditTodoScreen';
import { navigationRef } from '../utils/navigation';

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

const Stack = createNativeStackNavigator<StackParamsList>();

function AppNavigator() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Edit' component={EditTodoScreen} />
        <Stack.Screen name='Create' component={CreateTodoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
