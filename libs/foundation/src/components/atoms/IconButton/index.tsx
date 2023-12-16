import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

type IconButtonProps = {
  name: string;
  size?: number;
  color?: string;
  containerClasses?: Record<string, string>[];
  classes?: Record<string, string>[];
  onIconPress: () => void;
};

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

const styles = StyleSheet.create({
  textCenter: {
    textAlign: 'center',
    color: '#ffffff',
  },
  textMd: {
    fontSize: 18,
  },
  buttonContainer: {
    padding: 16,
  },
  fullWidth: {
    width: '100%',
  },
  button: {
    backgroundColor: '#143055',
    borderRadius: 4,
    padding: 16,
  },
});

export default IconButton;
