/**
 * This file contains the application's variables.
 *
 * Define color, sizes, etc. here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */

/**
 * Colors
 */
export const Colors = {
  transparent: 'rgba(0,0,0,0)',
  inputBackground: '#FFFFFF',
  white: '#ffffff',
  // Typography
  textDark: '#000000',
  textGray: '#4D4D4D',
  textLight: '#ffffff',
  primary: '#143055',
  secondary: '#28a745',
  success: '#28a745',
  error: '#dc3545',
  // ComponentColors
  circleButtonBackground: '#E1E1EF',
  circleButtonColor: '#44427D',
};

/**
 * FontSize
 */
export const FontSize = {
  caption: 14, // xs
  body: 18, // sm
  h4: 20, // md
  h3: 24, // lg
  h2: 32, // xl
  h1: 48, // xxl
};

/**
 * Metrics Sizes
 */
const xs = 4;
const sm = xs * 2; // 8
const md = xs * 3; // 12
const lg = sm * 2; // 16
const xl = xs * 5; // 20
const xxl = md * 2; // 24

export const MetricsSizes = {
  xs,
  sm,
  md,
  lg,
  xl,
  xxl,
};

export default {
  Colors,
  FontSize,
  MetricsSizes,
};
