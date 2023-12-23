import React, { PropsWithChildren, ReactNode } from 'react';
import { Text } from 'react-native';

import { FontColors, FontStyles, TextAlignments } from '../../../@types/theme';
import * as Variables from '../../../constants/theme';
import { useFonts } from '../../../hooks';
import { ellipsis } from '../../../utils';

interface TypographyProps {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'caption';
  align?: TextAlignments;
  color?: FontColors;
  style?: FontStyles;
  noEllipsis?: boolean;
  children?: string | ReactNode;
}

const Typography: React.FC<PropsWithChildren<TypographyProps>> = ({
  children,
  variant,
  noEllipsis = false,
  align = 'center',
  color = 'textDark',
  style = 'regular',
}) => {
  const fonts = useFonts(Variables);

  return (
    <Text style={[fonts[variant], fonts[color], fonts[align], fonts[style]]}>
      {typeof children === 'string' && !noEllipsis ? ellipsis(children) : children}
    </Text>
  );
};

export default Typography;
