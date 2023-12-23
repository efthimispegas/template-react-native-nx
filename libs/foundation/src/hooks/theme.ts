import { StyleSheet } from 'react-native';

import { ThemeVariables, Gutters, Fonts } from '../../src/@types/theme';

export const useGutters = ({ MetricsSizes }: ThemeVariables): Gutters => {
  return StyleSheet.create(
    Object.entries(MetricsSizes).reduce(
      (acc, [key, value]) => ({
        ...acc,
        /* Margins */
        [`${key}m`]: {
          margin: value,
        },
        [`${key}mb`]: {
          marginBottom: value,
        },
        [`${key}mt`]: {
          marginTop: value,
        },
        [`${key}mr`]: {
          marginRight: value,
        },
        [`${key}ml`]: {
          marginLeft: value,
        },
        [`${key}mv`]: {
          marginVertical: value,
        },
        [`${key}mh`]: {
          marginHorizontal: value,
        },
        /* Paddings */
        [`${key}p`]: {
          padding: value,
        },
        [`${key}pb`]: {
          paddingBottom: value,
        },
        [`${key}pt`]: {
          paddingTop: value,
        },
        [`${key}pr`]: {
          paddingRight: value,
        },
        [`${key}pl`]: {
          paddingLeft: value,
        },
        [`${key}pv`]: {
          paddingVertical: value,
        },
        [`${key}ph`]: {
          paddingHorizontal: value,
        },
      }),
      {},
    ) as Gutters,
  );
};

export const useFonts = ({ FontSize, Colors }: ThemeVariables): Fonts => {
  return StyleSheet.create({
    /* Font sizes */
    caption: {
      fontSize: FontSize.caption,
    },
    body: {
      fontSize: FontSize.body,
    },
    h4: {
      fontSize: FontSize.h4,
    },
    h3: {
      fontSize: FontSize.h3,
    },
    h2: {
      fontSize: FontSize.h2,
    },
    h1: {
      fontSize: FontSize.h1,
    },
    /* Text alignment */
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
    /* Colors */
    primary: {
      color: Colors.primary,
    },
    secondary: {
      color: Colors.secondary,
    },
    textLight: {
      color: Colors.textLight,
    },
    textDark: {
      color: Colors.textDark,
    },
    textGray: {
      color: Colors.textGray,
    },
    error: {
      color: Colors.error,
    },
    /** Font weight */
    bold: {
      fontStyle: 'normal',
      fontWeight: 'bold',
    },
    italic: {
      fontStyle: 'italic',
      fontWeight: 'normal',
    },
    regular: {
      fontStyle: 'normal',
      fontWeight: '400',
    },
    black: {
      fontStyle: 'normal',
      fontWeight: '800',
    },
  });
};
