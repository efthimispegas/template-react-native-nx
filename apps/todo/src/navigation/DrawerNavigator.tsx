import React, { FC } from 'react';

import { createDrawerNavigator, DrawerContentComponentProps } from '@react-navigation/drawer';
import { CustomDrawer } from '@template-monorepo/foundation';

import { LogoutScreen } from '../screens';

import AppNavigator from './AppNavigator';

const Drawer = createDrawerNavigator();

const DrawerContent: FC<DrawerContentComponentProps> = props => {
  return <CustomDrawer {...props} onLogout={() => props.navigation.navigate('Logout')} />;
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName={'Stack'}
      drawerContent={DrawerContent}
      screenOptions={{
        swipeEnabled: false,
        headerShown: false,
        drawerType: 'front',
        drawerPosition: 'right',
      }}>
      <Drawer.Screen name={'Stack'} component={AppNavigator} />
      <Drawer.Screen name={'Logout'} component={LogoutScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
