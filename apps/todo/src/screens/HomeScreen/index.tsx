import React from 'react';
import { ScrollView } from 'react-native';

import { Button, Header, Section, TodoList, Typography } from '@template-monorepo/foundation';

import useHomeController from '../../hooks/controllers/Home/useHomeController';
import useHomeViewModel from '../../hooks/view-models/Home/useHomeViewModel';

const HomeScreen = () => {
  const { todos, isLoading, error } = useHomeViewModel();
  const { onActionPress, onCreatePress } = useHomeController();

  return (
    <ScrollView>
      <Header p={'xs'}>
        <Typography color={'primary'} variant={'h2'}>
          Todo App,
        </Typography>
        {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
        <Typography color={'primary'} variant={'h1'} noEllipsis>
          Start organizing your day ✍️
        </Typography>
      </Header>
      <Section>
        <TodoList data={todos} error={error} isLoading={isLoading} onActionPress={onActionPress} />
        <Button
          fullWidth
          title={'Add todo'}
          onButtonPress={onCreatePress}
          disabled={isLoading || Boolean(error)}
        />
      </Section>
    </ScrollView>
  );
};

export default HomeScreen;
