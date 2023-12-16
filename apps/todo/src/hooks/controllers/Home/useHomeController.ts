import { useCallback } from 'react';

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { StackParamsList } from '../../../navigation/AppNavigator';
import { useDispatch } from '../../../redux/store';
import { deleteTodo } from '../../../redux/todos';

export default function useHomeController() {
  const { navigate } = useNavigation<StackNavigationProp<StackParamsList, 'Create'>>();
  const dispatch = useDispatch();

  const onActionPress = useCallback((id: string, action: 'edit' | 'delete') => {
    if (action === 'delete') {
      dispatch(deleteTodo(id));
    } else {
      navigate('Edit', { id });
    }
  }, []);

  const onCreatePress = useCallback(() => {
    navigate('Create');
  }, []);

  return {
    onActionPress,
    onCreatePress,
  };
}
