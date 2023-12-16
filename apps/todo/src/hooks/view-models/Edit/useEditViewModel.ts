import { useDispatch, useSelector } from '../../../redux/store';
import { editTodo, selectTodosState } from '../../../redux/todos';

export default function useEditViewModel(id: string) {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector(selectTodosState());
  const todo = data.find(todo => todo.id === id);

  return {
    todo,
    error,
    editTodo,
    dispatch,
    isLoading,
  };
}
