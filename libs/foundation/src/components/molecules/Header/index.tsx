import React, { PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';

import Box, { BoxProps } from '../../atoms/Box';

interface HeaderProps extends BoxProps {
  clippedGutters?: boolean;
}

const Header: React.FC<PropsWithChildren<HeaderProps>> = ({
  children,
  clippedGutters,
  classes = [],
}) => {
  return <Box classes={[!clippedGutters ? styles.spacing : undefined, ...classes]}>{children}</Box>;
};

const styles = StyleSheet.create({
  spacing: {
    padding: 12,
  },
});

export default Header;
