import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { styles } from './styles';
import { WelcomeText } from './WelcomeText';

export const WelcomeSection = () => {

  return (
    <Container sx={styles.container} maxWidth='xl'>
      <Box sx={styles.boxStyle}>
        <WelcomeText/>
      </Box>
    </Container>
  )
};