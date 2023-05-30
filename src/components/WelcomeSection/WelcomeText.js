import React from "react";
import { TypewriterText } from "./TypewriterText";
import Container from "@mui/material/Container";
import { Typography, Divider } from "@mui/material";

export const WelcomeText = () => {
  return (
    <Container sx={{
      maxWidth: { xs: '90%', sm: '80%', md: '70%', lg: '40%' }, borderRadius: '10px',
      border: '1px solid #fbbc05', position: 'absolute', top: '200px', right: '5%',
      boxShadow: '0px 6px 13px -6px rgba(0,0,0,0.55)',
      background: 'rgba(250, 245, 245, 0.911)',
      padding: { xs: 2, sm: 3, md: 4 },
    }}>
      <TypewriterText text='Нещата за Поморие, които и google не знае...' />
      <Divider />
      <Typography variant="subtitle1" align='left' m='2'>
        Добре дошли в красивия и слънчев курорт, Поморие! Време е градът ни да има информационен
        сайт, който да служи, като пътеводител за гостите на град Поморие и да отговаря с актуална информация
        на най-важните за туристите въпроси.
        Този сайт е направен с <b>нестопанска цел</b> от гражданин на Поморие и е абсолютно
        потребителски ориентиран. 
        <Divider/>
        <b>Тук ще намерите отговори на въпроси, като:</b>
        <ul>
          <li>Къде да паркирам и на какви цени?</li>
          <li>Колко струват чадърите и шезлонгите този сезон?</li>
          <li>Къде да играят децата ми?</li>
          <li>Къде да се разхождам или спортувам?</li>
          <li>Какви атракциони има в Поморие и колко струват?</li>
        </ul>
      </Typography>
    </Container>
  );
};
