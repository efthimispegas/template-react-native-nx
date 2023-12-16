import React, { PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';

type HeaderProps = {
  clippedGutters?: boolean;
};

const Header: React.FC<PropsWithChildren<HeaderProps>> = ({ children, clippedGutters }) => {
  return (
    <View style={[styles.header, !clippedGutters ? styles.spacing : undefined]}>{children}</View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginVertical: 24,
  },
  spacing: {
    padding: 12,
  },
});

export default Header;
