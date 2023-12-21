import React, { FC } from 'react';
import { ActivityIndicator } from 'react-native';

import { Box, Container } from '@template-monorepo/foundation';

const SplashScreen: FC = () => {
  return (
    <Container maxWidth={'xl'} fixed>
      <Box direction='row' align={'center'} classes={[{ flex: 1 }]}>
        <ActivityIndicator size={'small'} />
      </Box>
    </Container>
  );
};

export default SplashScreen;
