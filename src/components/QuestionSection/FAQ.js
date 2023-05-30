import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import { frequentlyAskedQuestions } from '../mock-data/data';
import { HomepageSectionsCard } from '../UI/HomepageSectionsCard';
import './FAQ.css';

export const FAQ = () => {
  return (
    <HomepageSectionsCard>
      <h1>често задавани въпроси: 2023</h1>
        {frequentlyAskedQuestions.map((question) => {
            return (
              <div className='accordion-element-wrapper' key={question.question}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: '#fbbc05' }}/>}
                    sx={{minHeight: '70px'}}
                    > 
                    <PsychologyAltIcon sx={{color: '#fbbc05', marginRight: '10px' }} />
                    <Typography>{question.question}</Typography>
                  </AccordionSummary>
                  <AccordionDetails
                    sx={{minHeight: '300px'}}
                  >
                    <Typography align='left'>
                      {question.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            );
        })}
    </HomepageSectionsCard>
  );
};
