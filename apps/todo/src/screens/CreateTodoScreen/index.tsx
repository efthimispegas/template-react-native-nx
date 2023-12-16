import React from 'react';

import { TextInput, Button, Container, Section, Typography } from '@template-monorepo/foundation';

import useCreateController from '../../hooks/controllers/Create/useCreateController';

const CreateTodoScreen = () => {
  const { handleSubmit, onSubmit, control } = useCreateController();
  return (
    <Container touchable maxWidth={'xl'}>
      <Section clippedGutters>
        <Typography variant={'h2'} color={'primary'}>
          Add new todo:
        </Typography>
      </Section>
      <Section clippedGutters>
        <TextInput
          fullWidth
          name={'todo'}
          control={control}
          placeholder='Add todo...'
          rules={{ required: 'This is required' }}
        />
      </Section>
      <Button disabled={false} title={'Create'} onButtonPress={handleSubmit(onSubmit)} />
    </Container>
  );
};

export default CreateTodoScreen;
