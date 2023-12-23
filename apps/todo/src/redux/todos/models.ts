import { ITodo } from '@template-monorepo/core';

export type InitialState = {
  data: ITodo[];
  isLoading: boolean;
  error: null | string;
  totals: number;
};
