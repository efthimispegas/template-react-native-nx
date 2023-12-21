/**
 * Selectors
 */

import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../store';

export const selectAuthData = ({ appState }: RootState) => appState.authData;
export const selectUserInfo = ({ appState }: RootState) => appState.userInfo;
export const selectAppError = ({ appState }: RootState) => appState.error;
export const selectAppLoading = ({ appState }: RootState) => appState.isLoading;

export const selectAuthState = () =>
  createSelector([selectAuthData, selectAppLoading, selectAppError], (data, isLoading, error) => {
    return { data, isLoading, error };
  });

export const selectUserInfoState = () =>
  createSelector([selectUserInfo, selectAppLoading, selectAppError], (data, isLoading, error) => {
    return { data, isLoading, error };
  });
