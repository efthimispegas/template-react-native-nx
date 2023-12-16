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
  textBlack: '#000000',
  textGray: '#4D4D4D',
  textWhite: '#ffffff',
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
  xs: 14, // caption
  sm: 18, // body
  md: 20, // h4
  lg: 24, // h3
  xl: 32, // h2
  xxl: 48, // h1
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
