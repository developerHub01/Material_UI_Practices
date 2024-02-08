import React from 'react'
import BasicChip from './BasicChip'
import { Stack } from '@mui/material'
import ChipArray from './ChipArray';

const MainChip = () => {
  return (
    <Stack gap={2}>
      <BasicChip />
      <ChipArray />
    </Stack>
  );
};

export default MainChip
