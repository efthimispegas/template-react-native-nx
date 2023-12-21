import React, { PropsWithChildren, ReactNode } from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';

import { ThemeVariables } from '../../../@types/theme';
import * as Variables from '../../../constants/theme';
import { ellipsis } from '../../../utils';

interface TypographyProps extends TextProps {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'caption';
  color?: 'primary' | 'secondary' | 'text' | 'error';
  align?: 'left' | 'center' | 'right';
  noEllipsis?: boolean;
  children?: string | ReactNode;
}

const Typography: React.FC<PropsWithChildren<TypographyProps>> = ({
  children,
  variant,
  noEllipsis = false,
  align = 'center',
  color = 'text',
}) => {
  const fonts = useFonts(Variables);

  return (
    <Text style={[fonts[variant], fonts[color], fonts[align]]}>
      {typeof children === 'string' && !noEllipsis ? ellipsis(children as string) : children}
    </Text>
  );
};

const useFonts = ({ FontSize, Colors }: ThemeVariables) => {
  return StyleSheet.create({
    caption: {
      fontSize: FontSize.xs,
    },
    body: {
      fontSize: FontSize.sm,
    },
    h4: {
      fontSize: FontSize.md,
    },
    h3: {
      fontSize: FontSize.lg,
    },
    h2: {
      fontSize: FontSize.xl,
    },
    h1: {
      fontSize: FontSize.xxl,
    },
    center: {
      textAlign: 'center',
    },
    justify: {
      textAlign: 'justify',
    },
    left: {
      textAlign: 'left',
    },
    right: {
      textAlign: 'right',
    },
    // colors
    primary: {
      color: Colors.primary,
    },
    secondary: {
      color: Colors.secondary,
    },
    text: {
      color: Colors.textWhite,
    },
    error: {
      color: Colors.error,
    },
  });
};

export default Typography;
