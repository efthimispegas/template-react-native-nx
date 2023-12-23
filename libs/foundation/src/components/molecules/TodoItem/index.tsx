import React from 'react';

import ActionIcon from '../../atoms/ActionIcon';
import Box from '../../atoms/Box';
import Typography from '../../atoms/Typography';

type TodoItemProps = {
  id: string;
  title: string;
  onPress: (id: string, action: 'edit' | 'delete') => void;
};

const TodoItem: React.FC<TodoItemProps> = ({ id, title, onPress }) => {
  return (
    <Box pv={'xs'} direction={'row'} align={'center'} justify={'between'}>
      <Box>
        <Typography variant={'h4'} color={'textLight'}>
          {title}
        </Typography>
      </Box>
      <Box direction={'row'} justify={'right'}>
        <ActionIcon id={id} action={'edit'} onIconPress={onPress} />
        <ActionIcon id={id} action={'delete'} onIconPress={onPress} />
      </Box>
    </Box>
  );
};

export default TodoItem;
