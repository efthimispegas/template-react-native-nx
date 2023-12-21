import { createAsyncThunk } from '@reduxjs/toolkit';
import { ITodo, StateEnum } from '@template-monorepo/foundation';

import { getTodos } from '../../services/todos';
import { IThunk } from '../app/models';

export const allTodosAsyncThunk = createAsyncThunk<ITodo[], string, IThunk>(
  'todos/total',
  async (query, thunkApi) => {
    const controller = new AbortController();

    const { data, responseState, error } = await getTodos({ signal: controller.signal }, query);

    // handles error here
    if (responseState === StateEnum.Error) {
      return thunkApi.rejectWithValue(error);
    }

    return data;
  },
);
