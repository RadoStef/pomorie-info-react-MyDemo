import React from 'react';
import '../UI/CityObject.css';
import { CityObjectCard } from './CityObjectCard';
import { landmarks } from '../mock-data/data';
import { sectionDescriptions } from '../mock-data/data';
import { CityObjectHeader } from './CityObjectHeader';
import { SliderPage } from './SliderPage';



export const CityObject = () => {
  return (
    <div className='objects-wrapper'>
      <CityObjectHeader landmarksDescriptions={sectionDescriptions}/>
      <CityObjectCard landmarksData={landmarks}/>
      <SliderPage/>
    </div>
  )
};
