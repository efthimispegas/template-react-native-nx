import React, { PropsWithChildren } from 'react';
import { Keyboard, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

type ContainerProps = {
  maxWidth?: 'lg' | 'md' | 'sm' | 'xl' | 'xs' | false;
  fixed?: boolean;
  touchable?: boolean;
  clippedGutters?: boolean;
};

const Container: React.FC<PropsWithChildren<ContainerProps>> = ({
  fixed,
  children,
  maxWidth,
  touchable,
  clippedGutters,
}) => {
  return touchable ? (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View
        style={[
          fixed ? styles.fixed : undefined,
          !clippedGutters ? styles.spacing : undefined,
          maxWidth ? styles[maxWidth] : styles.section,
        ]}>
        {children}
      </View>
    </TouchableWithoutFeedback>
  ) : (
    <View
      style={[
        fixed ? styles.fixed : undefined,
        !clippedGutters ? styles.spacing : undefined,
        maxWidth ? styles[maxWidth] : styles.section,
      ]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  fixed: {
    flex: 1,
  },
  section: {
    marginVertical: 24,
  },
  spacing: {
    padding: 12,
  },
  lg: {
    width: '65%',
  },
  md: {
    width: '50%',
  },
  sm: {
    width: '35%',
  },
  xl: {
    width: '100%',
    height: '100%',
  },
  xs: {
    width: '25%',
  },
});

export default Container;
