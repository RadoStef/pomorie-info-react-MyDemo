import React from 'react';
import '../UI/CityObject.css';
import { CityObjectCard } from './CityObjectCard';
import { wineAndCulture } from '../mock-data/data';
import { sectionDescriptions } from '../mock-data/data';
import { CityObjectHeader } from './CityObjectHeader';



export const CityObject = () => {
  return (
    <div className='objects-wrapper'>
      <CityObjectHeader cultureDescriptions={sectionDescriptions}/>
      <CityObjectCard cultureData={wineAndCulture}/>
    </div>
  )
};
