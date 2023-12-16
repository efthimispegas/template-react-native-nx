import Snackbar from 'react-native-snackbar';

import { createSlice } from '@reduxjs/toolkit';
import { ITodo } from '@template-monorepo/foundation';
import _ from 'lodash';

import { InitialState } from './models';
import { allTodosAsyncThunk } from './thunks';

export const initialState: InitialState = {
  data: [],
  totals: 0,
  isLoading: false,
  error: null,
};

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todoAlreadyExists = state.data.find(todo => todo.title === action.payload);
      console.log(todoAlreadyExists);
      if (!todoAlreadyExists) {
        const todo: ITodo = {
          id: _.random(0, 99999),
          ...action.payload,
        };
        console.log(todo);
        state.data.push(todo);
        state.totals += 1;
        Snackbar.show({
          text: 'Todo added',
          duration: 1500,
          backgroundColor: '#0b9410',
          textColor: '#fff',
        });
      }
    },
    editTodo: (state, action) => {
      const index = state.data.findIndex(todo => todo.id === action.payload.id);
      state.data.splice(index, 1, action.payload);
      Snackbar.show({
        text: 'Todo updated',
        duration: 1500,
        backgroundColor: '#0b9410',
        textColor: '#fff',
      });
    },
    deleteTodo: (state, action) => {
      state.totals -= 1;
      state.data = state.data.filter(todo => todo.id !== action.payload);
      Snackbar.show({
        text: 'Todo deleted',
        duration: 1500,
        backgroundColor: 'red',
        textColor: '#fff',
      });
    },
  },
  extraReducers: builder => {
    builder.addCase(allTodosAsyncThunk.pending, state => {
      state.isLoading = true;
      state.error = initialState.error;
    });
    builder.addCase(allTodosAsyncThunk.fulfilled, (state, { payload }) => {
      console.log('payload:', { payload });
      state.data = payload;
      state.totals = payload.length;
      state.isLoading = false;
    });
    builder.addCase(allTodosAsyncThunk.rejected, (state, { payload }) => {
      state.isLoading = false;
      if (payload) {
        state.error = payload.error;
      }
    });
    builder.addCase(editTodo, (state, { payload }) => {
      Snackbar.show({
        text: 'Todo updated',
        duration: 1500,
        backgroundColor: '#0b9410',
        textColor: '#fff',
      });
    });
  },
});

/**
 * export actions
 */
export const { addTodo, editTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
