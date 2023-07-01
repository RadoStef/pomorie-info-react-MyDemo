import React from 'react';
import '../UI/CityObject.css';
import { CityObjectHeader } from './CityObjectHeader';
import { photographersDescription } from '../mock-data/data';

export const CityObject = () => {
  return (
    <div className='objects-wrapper'>
      <CityObjectHeader photographersDescriptions={photographersDescription}/>
    </div>
  )
};
