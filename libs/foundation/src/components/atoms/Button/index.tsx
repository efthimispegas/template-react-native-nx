import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type ButtonProps = {
  title: string;
  disabled: boolean;
  fullWidth?: boolean;
  onButtonPress: () => void;
};

const Button: React.FC<ButtonProps> = ({ title, disabled, fullWidth, onButtonPress }) => {
  return (
    <View style={[styles.buttonContainer, fullWidth ? styles.fullWidth : undefined]}>
      <TouchableOpacity
        disabled={disabled}
        activeOpacity={0.6}
        style={[styles.button]}
        onPress={onButtonPress}>
        <Text style={[styles.textMd, styles.textCenter]}>{title}</Text>
      </TouchableOpacity>
    </View>
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

export default Button;
