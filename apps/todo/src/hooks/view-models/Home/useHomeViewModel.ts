import { useEffect } from 'react';

import { useDispatch, useSelector } from '../../../redux/store';
import { selectTodosState, allTodosAsyncThunk } from '../../../redux/todos';

export default function useHomeViewModel() {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector(selectTodosState());

  useEffect(() => {
    dispatch(allTodosAsyncThunk('all'));
  }, []);

  // TODO: add support for search
  // const debouncedSearch = _.debounce((query: string) => {
  //   setTodos({ responseState: StateEnum.Loading });

  //   // setTodos(responseState);
  // }, 500);
  // const onGetTodosByQuery = useCallback((query: string) => {
  //   if (query.length > 2) {
  //     debouncedSearch(query);
  //   }
  // }, []);

  return {
    todos: data,
    error,
    isLoading,
    // onGetTodosByQuery,
  };
}
