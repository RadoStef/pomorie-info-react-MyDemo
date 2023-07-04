import React, { useEffect } from 'react';
import '../UI/CityObject.css';
import { CityObjectCard } from './CityObjectCard';
import { attractions } from '../mock-data/data';
import { sectionDescriptions } from '../mock-data/data';
import { CityObjectHeader } from './CityObjectHeader';
import { pageTitles } from '../mock-data/data';



export const CityObject = () => {
  useEffect(() => {
    document.title =  pageTitles.attractions;
  }, [])
  
  return (
    <div className='objects-wrapper'>
      <CityObjectHeader attractionsDescriptions={sectionDescriptions}/>
      <CityObjectCard attractionsData={attractions}/>
    </div>
  )
};