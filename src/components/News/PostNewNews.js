import React from 'react';
import { TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './News.css';

export const PostNewNews = () => {
  return (
    <div className='news-container'>
        <h2 style={{ marginLeft: '20%'}}> Post new NEWS using the MUI form below </h2>
      <Stack spacing={3} sx={{width: '70%', margin: '50px 20%'}}>
        <TextField id="outlined-basic" label="News header here" variant="outlined" fullWidth margin='dense'/>
        <TextField multiline='true' minRows='5' maxRows='7' fullWidth='true' maxWidth='sm' label="News body here"/>
        <Button variant='contained' >Post news</Button>
      </Stack>
    </div>
  )
};
