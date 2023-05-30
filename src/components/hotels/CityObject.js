import React from 'react';
import { CityObjectCard } from './CityObjectCard';
import { hotels } from '../mock-data/data';
import { sectionDescriptions } from '../mock-data/data';
import { CityObjectHeader } from './CityObjectHeader';
import { SliderPage } from './SliderPage';
import '../UI/CityObject.css';



export const CityObject = () => {
  return (
    <div className='objects-wrapper'>
      <CityObjectHeader hotelsDescriptions={sectionDescriptions}/>
      <CityObjectCard hotelsData={hotels}/>
      <SliderPage/>
    </div>
  )
};
