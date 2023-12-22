import React, { FC } from 'react';

import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';

export interface CustomDrawerProps extends DrawerContentComponentProps {
  onLogout: () => void;
}

type IconProps = {
  focused: boolean;
  size: number;
  color: string;
};

const LogoutIcon: FC<IconProps> = ({ size, color }) => (
  <Icon name={'logout'} size={size} color={color} />
);

const CustomDrawer: FC<CustomDrawerProps> = ({ onLogout, ...props }) => {
  return (
    <DrawerContentScrollView {...props}>
      {/* <DrawerItemList {...props} /> */}
      <DrawerItem label={'Logout'} icon={LogoutIcon} onPress={onLogout} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
