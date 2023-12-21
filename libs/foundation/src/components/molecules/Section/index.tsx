import React, { PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';

type SectionProps = {
  clippedGutters?: boolean;
  fullHeight?: boolean;
  align?: 'left' | 'center' | 'right' | 'between' | 'around' | 'stretch';
  classes?: Record<string, any>[];
};

const Section: React.FC<PropsWithChildren<SectionProps>> = ({
  classes = [],
  align,
  children,
  fullHeight,
  clippedGutters,
}) => {
  return (
    <View
      style={[
        align ? styles[align] : undefined,
        fullHeight ? styles.fullHeight : styles.section,
        align === 'stretch' ? styles.fullWidth : undefined,
        !clippedGutters ? styles.spacing : undefined,
        ...classes,
      ]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  fullHeight: {
    flex: 1,
  },
  fullWidth: {
    width: '100%',
    backgroundColor: 'yellow',
  },
  section: {
    marginVertical: 8,
  },
  spacing: {
    padding: 16,
  },
  center: {
    alignItems: 'center',
  },
  left: {
    alignItems: 'flex-start',
  },
  right: {
    alignItems: 'flex-end',
  },
  stretch: {
    alignItems: 'stretch',
  },
  between: {
    justifyContent: 'space-between',
  },
  around: {
    justifyContent: 'space-around',
  },
});

export default Section;
