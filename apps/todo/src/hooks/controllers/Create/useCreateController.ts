import { useCallback, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { addTodo } from '../../..//redux/todos';
import { StackParamsList } from '../../../navigation/RootNavigator';
import { useDispatch } from '../../../redux/store';

const defaultValues: FieldValues = {
  todo: '',
};

export default function useCreateController() {
  const dispatch = useDispatch();
  const navigation = useNavigation<StackNavigationProp<StackParamsList, 'Create'>>();
  const [form, setFormState] = useState(defaultValues);

  const { control, handleSubmit } = useForm({
    mode: 'onSubmit',
    defaultValues: form,
  });

  const onSubmit = useCallback((fieldValues: FieldValues) => {
    console.log(fieldValues);
    const todo = {
      title: fieldValues.todo.trim(),
      subtitle: fieldValues.todo.trim(),
    };
    dispatch(addTodo(todo));
    navigation.navigate('Home');
    console.log({ fieldValues });
  }, []);

  return {
    control,
    onSubmit,
    handleSubmit,
    setFormState,
  };
}
