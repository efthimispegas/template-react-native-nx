import React, { PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';

import { useGutters } from '../../../../hooks/theme';
import {
  AlignKeys,
  Directions,
  Gutters,
  Justifications,
  VaiableSizes,
} from '../../../@types/theme';
import * as Variables from '../../../constants/theme';

export interface BoxProps {
  m?: VaiableSizes; // margin
  ml?: VaiableSizes; // margin-left
  mr?: VaiableSizes; // margin-right
  mt?: VaiableSizes; // margin-top
  mb?: VaiableSizes; // margin-bottom
  mh?: VaiableSizes; // margin-horizontal
  mv?: VaiableSizes; // margin-vertical
  p?: VaiableSizes; // padding
  pl?: VaiableSizes; // padding-left
  pr?: VaiableSizes; // padding-right
  pt?: VaiableSizes; // padding-top
  pb?: VaiableSizes; // padding-bottom
  ph?: VaiableSizes; // padding-horizontal
  pv?: VaiableSizes; // padding-vertical
  align?: AlignKeys<'row'>;
  justify?: AlignKeys<'col'> | Justifications;
  direction?: Directions;
  classes?: (Record<string, any> | undefined)[];
}

const Box: React.FC<PropsWithChildren<BoxProps>> = ({
  classes = [],
  children,
  align,
  justify,
  direction = 'col',
  ...rest
}) => {
  const gutters = useGutters(Variables);
  const margins: string[] = [];
  const paddings: string[] = [];
  Object.entries(rest).forEach(([key, value]) => {
    if (key.includes('m')) {
      margins.push(`${value}${key}`);
    } else {
      paddings.push(`${value}${key}`);
    }
  });
  return (
    <View
      style={[
        margins.map(key => gutters[key as keyof Gutters]),
        paddings.map(key => gutters[key as keyof Gutters]),
        align ? styles[align] : undefined,
        justify ? styles[justify] : undefined,
        direction ? styles[direction] : styles.col,
        ...classes,
      ]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  // direction
  col: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
  // align
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  top: {
    alignItems: 'flex-start',
  },
  bottom: {
    alignItems: 'flex-end',
  },
  // justify
  left: {
    justifyContent: 'flex-start',
  },
  right: {
    justifyContent: 'flex-end',
  },
  between: {
    justifyContent: 'space-between',
  },
  around: {
    justifyContent: 'space-around',
  },
});

export default Box;
