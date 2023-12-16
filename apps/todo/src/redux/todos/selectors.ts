/**
 *
 * Selectors
 *
 */

import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../store';

export const selectTodos = ({ todos }: RootState) => todos.data;
export const selectTodosError = ({ todos }: RootState) => todos.error;
export const selectTodosLoading = ({ todos }: RootState) => todos.isLoading;

export const selectTodosState = () =>
  createSelector([selectTodos, selectTodosLoading, selectTodosError], (data, isLoading, error) => {
    return { data, isLoading, error };
  });
