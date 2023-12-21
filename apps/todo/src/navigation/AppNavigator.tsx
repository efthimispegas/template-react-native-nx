import React from 'react';

import { DrawerActions } from '@react-navigation/native';
import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import { Box, IconButton } from '@template-monorepo/foundation';

import { selectUserInfo } from '../redux/app';
import { useSelector } from '../redux/store';
import { HomeScreen, CreateTodoScreen, EditTodoScreen } from '../screens';
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
const MenuIcon = () => (
  <Box mr={'xs'}>
    <IconButton
      name={'menu'}
      onIconPress={() => navigationRef.dispatch(DrawerActions.openDrawer())}
    />
  </Box>
);

// TODO: Add auth navigator with loading screen
// TODO: Add user info inside the home screen
// TODO: Customize the Home header to show user name
// TODO: Add logout functionality to header right icon
function AppNavigator() {
  const userInfo = useSelector(selectUserInfo);
  const headerTitle = `Welcome back, ${userInfo?.given_name}`;
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={HomeScreen}
        options={{
          headerTitle,
          headerRight: MenuIcon,
        }}
      />
      <Stack.Screen name='Edit' component={EditTodoScreen} />
      <Stack.Screen name='Create' component={CreateTodoScreen} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
