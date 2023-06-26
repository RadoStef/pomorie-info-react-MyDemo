// import { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { headerStyles } from '../HeaderSection/styles';

export const WeatherInfo = () => {
  // const [temp, setTemp] = useState(null);
  // const [seaTemp, setSeaTemp] = useState(null);
  // const [windSpeed, setWindSpeed] = useState(null);
  // const [weatherDescription, setWeatherDescription] = useState(null);

  const today = new Date();
  const summerEnd = new Date(2023, 8, 23);
  const daysLeftToSummerStart = (date1, date2) => Math.round((date2 - date1) / (1000 * 60 * 60 * 24));

  // const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  // const lat = 42.558;
  // const lon = 27.643;

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch(
  //       `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=bg&appid=${apiKey}`
  //     );
  //     const data = await response.json();
  //     setTemp(data.main.temp);
  //     setSeaTemp(data.main.sea_level);
  //     setWindSpeed(data.wind.speed);
  //     setWeatherDescription(data.weather[0].description);
  //   };
  //   fetchData();
  // }, [apiKey]);

  return (
    <Container sx={headerStyles.weatherInfoBar} maxWidth="xl">
      {/* <Box>
        Времето в момента: {weatherDescription}
      </Box>
      {temp && (
        <Box>
          Температура на въздуха: {temp} &deg;C
        </Box>
      )}
      {seaTemp && (
        <Box>
          Температура на морската вода: {seaTemp} &deg;C
        </Box>
      )}
      {windSpeed && (
        <Box>
          Скорост на вятъра: {windSpeed} м/с
        </Box>
      )} */}
      {<Box>
        Здравейте и добре дошли в Поморие! Астрономическото лято свършва след <span style={{color: 'red'}}>{daysLeftToSummerStart(today, summerEnd)}</span> дни, изживейте го максимално добре! 💥😎🎉
      </Box>}
    </Container>
  );
};
