import React, { FC } from 'react';
import { StyleSheet } from 'react-native';

import Box from '../../atoms/Box';
import Typography from '../../atoms/Typography';

type LabelValueProps = {
  label: string;
  value: string | Date;
};

const LabelValue: FC<LabelValueProps> = ({ label, value = '-' }) => {
  return (
    <Box direction={'row'} classes={[styles.container]}>
      <Typography variant={'body'} align={'left'} color={'text'} style={styles.label}>
        {label}
      </Typography>
      <Typography variant={'body'} align={'right'} numberOfLines={1}>
        {value?.toString()}
      </Typography>
    </Box>
  );
};

const styles = StyleSheet.create({
  label: {
    fontWeight: 'bold',
  },
  container: {
    gap: 10,
    overflow: 'hidden',
  },
});

export default LabelValue;
