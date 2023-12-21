import React, { FC } from 'react';

import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

export interface CustomDrawerProps extends DrawerContentComponentProps {}

const CustomDrawer: FC<CustomDrawerProps> = props => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
