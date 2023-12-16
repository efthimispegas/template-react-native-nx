import * as Variables from '../constants/theme';

export type VaiableSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type ThemeVariables = {
  Colors: typeof Variables.Colors;
  FontSize: typeof Variables.FontSize;
  MetricsSizes: typeof Variables.MetricsSizes;
};

type Margins = 'm' | 'mb' | 'mt' | 'mr' | 'ml' | 'mv' | 'mh';
type Paddings = 'p' | 'pb' | 'pt' | 'pr' | 'pl' | 'pv' | 'ph';

type MarginKeys = `${keyof ThemeVariables['MetricsSizes']}${Margins}`;
type PaddingKeys = `${keyof ThemeVariables['MetricsSizes']}${Paddings}`;

export type Gutters = {
  [key in MarginKeys | PaddingKeys]: {
    [k in string]: number;
  };
};

type Directions = 'row' | 'col';
type Alignments = {
  row: 'top' | 'bottom' | 'center';
  col: 'left' | 'right' | 'center';
};
type Justifications = 'around' | 'between';

export type AlignKeys<P> = Pick<Alignments, Directions>[P];
