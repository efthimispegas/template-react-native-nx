import React from 'react';
import { StyleSheet } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

import { ITodo } from '../../../domain/interfaces/Todo/ITodo';
import Box from '../../atoms/Box';
import Typography from '../../atoms/Typography';
import Section from '../../molecules/Section';
import TodoItem from '../../molecules/TodoItem';

type TodoItem = {
  id: number;
  title: string;
};

type TodoListProps = {
  data: ITodo[];
  error: string;
  isLoading: boolean;
  onActionPress: (id: string, action: 'edit' | 'delete') => void;
};

const TodoList: React.FC<TodoListProps> = ({ data, error, isLoading, onActionPress }) => {
  return (
    <Box>
      {error ? (
        <Typography variant={'body'} noEllipsis>
          {error}
        </Typography>
      ) : isLoading ? (
        <ActivityIndicator size={'small'} />
      ) : !data.length ? (
        /* eslint-disable-next-line jsx-a11y/accessible-emoji */
        <Typography variant={'h2'} noEllipsis>
          No more todos, yay 🚀{' '}
        </Typography>
      ) : (
        <Section align={'stretch'} classes={[styles.hero]}>
          <Box>
            {data.map(todo => (
              <TodoItem key={todo.id} id={todo.id} title={todo.title} onPress={onActionPress} />
            ))}
          </Box>
        </Section>
      )}
    </Box>
  );
};

const styles = StyleSheet.create({
  hero: {
    borderRadius: 12,
    backgroundColor: '#143055',
    marginBottom: 24,
  },
});

export default TodoList;
