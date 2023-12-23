import * as Variables from '../constants/theme';

export type VaiableSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type ThemeVariables = {
  Colors: typeof Variables.Colors;
  FontSize: typeof Variables.FontSize;
  MetricsSizes: typeof Variables.MetricsSizes;
};

type Margins = 'm' | 'mb' | 'mt' | 'mr' | 'ml' | 'mv' | 'mh';
type Paddings = 'p' | 'pb' | 'pt' | 'pr' | 'pl' | 'pv' | 'ph';
type FontSizes = 'caption' | 'body' | 'h4' | 'h3' | 'h2' | 'h1';
export type TextAlignments = 'left' | 'center' | 'right';
export type FontStyles = 'bold' | 'regular' | 'italic' | 'black';
export type FontColors = 'primary' | 'secondary' | 'error' | 'textLight' | 'textDark' | 'textGray';

type MarginKeys = `${keyof ThemeVariables['MetricsSizes']}${Margins}`;
type PaddingKeys = `${keyof ThemeVariables['MetricsSizes']}${Paddings}`;
type FontKeys = `${keyof ThemeVariables['FontSize']}`;

export type Gutters = {
  [key in MarginKeys | PaddingKeys]: {
    [k in string]: number;
  };
};

export type Fonts = {
  [key in FontKeys | TextAlignments | FontColors | FontStyles]: {
    [k in string]: string | number;
  };
};

type Directions = 'row' | 'col';
type Alignments = {
  row: 'top' | 'bottom' | 'center';
  col: 'left' | 'right' | 'center';
};
type Justifications = 'around' | 'between';

export type AlignKeys<P> = Pick<Alignments, Directions>[P];
