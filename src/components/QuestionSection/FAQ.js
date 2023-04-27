import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import { Box } from '@mui/material';
import { frequentlyAskedQuestions } from '../mock-data/data';
import './FAQ.css';

export const FAQ = () => {
  return (
    <Box sx={{width: '65%', margin: '30px 0', borderRadius: '10px', backgroundColor: '#f1f1f1'}}>
      <h1>често задавани въпроси: 2023</h1>
        {frequentlyAskedQuestions.map((question) => {
            return (
              <div className='accordion-wrapper' key={question.question}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: '#fbbc05' }}/>}
                    > 
                    <PsychologyAltIcon sx={{color: '#fbbc05', marginRight: '10px' }} />
                  <Typography>{question.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography align='left'>
                    {question.answer}
                  </Typography>
                </AccordionDetails>
                </Accordion>
              </div>
            );
        })}
    </Box>
  );
};
