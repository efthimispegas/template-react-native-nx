import React from 'react';

import Box from '../Box';
import IconButton from '../IconButton';

type ActionIconProps = {
  id: string;
  action: 'delete' | 'edit';
  onIconPress: (id: string, action: 'edit' | 'delete') => void;
};

const ActionIcon: React.FC<ActionIconProps> = ({ id, onIconPress, action }) => {
  return (
    <Box p={'sm'}>
      {/* <Text style={styles.text}>{action === 'delete' ? 'Delete' : 'Edit'}</Text> */}
      <IconButton
        size={24}
        onIconPress={() => onIconPress(id, action)}
        name={action === 'delete' ? 'delete' : 'edit'}
        color={action === 'delete' ? '#ec1212' : '#ff8c09'}
      />
    </Box>
  );
};

export default ActionIcon;
