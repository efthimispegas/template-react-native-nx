import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { CustomDrawer } from '@template-monorepo/foundation';

import AppNavigator from './AppNavigator';

const Drawer = createDrawerNavigator();

const DrawerContent = props => <CustomDrawer {...props} />;

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
      {/* <Drawer.Screen name={'Logout'} component={Screens.Logout} /> */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
