import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { styles } from './styles';
import { TypewriterText } from './TypewriterText';

export const WelcomeSection = ({text}) => {

  return (
    <Container sx={styles.container} maxWidth='xl'>
      <Box sx={styles.boxStyle}>
        <h1 style={{fontSize: '28px', color: 'black', background: '#f1f1f1', padding: '10px', transform: 'skew(-15deg)'}}><TypewriterText text='Нещата за Поморие, които и GOOGLE не знае.'/></h1>
      </Box>
    </Container>
  )
};