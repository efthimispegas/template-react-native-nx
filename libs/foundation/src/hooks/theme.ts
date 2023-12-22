import { StyleSheet } from 'react-native';

import { ThemeVariables, Gutters } from '../../src/@types/theme';

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
