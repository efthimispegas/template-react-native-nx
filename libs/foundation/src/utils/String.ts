import { globals } from '../constants';

export const ellipsis = (str: string) => {
  return str.length > globals.MAX_STR_LENGTH
    ? str.substring(0, globals.MAX_STR_LENGTH).trim().concat('...')
    : str;
};
