import React from 'react';
import { TouchableOpacity } from 'react-native';

import { IconProps } from 'react-native-vector-icons/Icon';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface IconButtonProps extends IconProps {
  name: string;
  size?: number;
  color?: string;
  containerClasses?: Record<string, string>[];
  classes?: Record<string, string>[];
  onIconPress: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({
  name,
  size = 24,
  classes = [],
  color = '#000',
  containerClasses = [],
  onIconPress,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.6} style={[...containerClasses]} onPress={onIconPress}>
      <Icon name={name} size={size} color={color} style={[...classes]} />
    </TouchableOpacity>
  );
};

export default IconButton;
