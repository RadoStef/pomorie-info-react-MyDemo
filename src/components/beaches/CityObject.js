import React from 'react';
import '../UI/CityObject.css';
import { CityObjectCard } from './CityObjectCard';
import { beaches } from '../mock-data/data';
import { sectionDescriptions } from '../mock-data/data';
import { CityObjectHeader } from './CityObjectHeader';
import { SliderPage } from './SliderPage';



export const CityObject = () => {
  return (
    <div className='objects-wrapper'>
      <CityObjectHeader beachesDescriptions={sectionDescriptions}/>
      <CityObjectCard beachesData={beaches}/>
      <SliderPage/>
    </div>
  )
};
