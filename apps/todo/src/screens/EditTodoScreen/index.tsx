import React from 'react';

import {
  TextInput,
  Button,
  Header,
  Typography,
  Section,
  Container,
} from '@template-monorepo/foundation';

import useEditController from '../../hooks/controllers/Edit/useEditController';

const EditTodoScreen = () => {
  const { control, onSubmit, handleSubmit, todo } = useEditController();
  return (
    <Container maxWidth={'xl'} touchable>
      <Header>
        <Typography variant={'h2'} color={'primary'} noEllipsis>
          {todo.title}
        </Typography>
      </Header>
      <Section clippedGutters>
        <TextInput
          fullWidth
          name={'todo'}
          control={control}
          value={todo.title}
          rules={{ required: 'This is required' }}
        />
        <Button
          fullWidth
          disabled={false}
          title={'Submit'}
          onButtonPress={handleSubmit(onSubmit)}
        />
      </Section>
    </Container>
  );
};

export default EditTodoScreen;
