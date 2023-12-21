import { useCallback, useEffect, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { StackParamsList } from '../../../navigation/RootNavigator';
import useEditViewModel from '../../view-models/Edit/useEditViewModel';

const defaultValues: FieldValues = {
  todo: '',
};

export default function useEditController() {
  const [form, setFormState] = useState(defaultValues);

  const navigation = useNavigation<StackNavigationProp<StackParamsList, 'Edit'>>();
  const {
    params: { id },
  } = useRoute<RouteProp<StackParamsList, 'Edit'>>();

  const { todo, dispatch, editTodo } = useEditViewModel(id);

  const { control, handleSubmit, setValue } = useForm({
    mode: 'onSubmit',
    defaultValues: form,
  });

  useEffect(() => {
    if (todo.title) {
      setValue('todo', todo.title);
    }
  }, [todo]);

  const onSubmit = useCallback((fieldValues: FieldValues) => {
    const _todo = {
      ...todo,
      title: fieldValues.todo.trim(),
    };
    dispatch(editTodo(_todo));
    navigation.navigate('Home');
    console.log({ fieldValues });
  }, []);

  return {
    todo,
    form,
    onSubmit,
    control,
    handleSubmit,
    setFormState,
  };
}
