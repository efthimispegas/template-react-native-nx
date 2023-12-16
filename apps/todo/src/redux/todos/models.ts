import { ITodo } from '@template-monorepo/foundation';

export type InitialState = {
  data: ITodo[];
  isLoading: boolean;
  error: null | string;
  totals: number;
};
