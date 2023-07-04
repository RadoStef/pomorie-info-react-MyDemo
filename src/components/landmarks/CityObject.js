import React, { useEffect } from 'react';
import '../UI/CityObject.css';
import { CityObjectCard } from './CityObjectCard';
import { landmarks } from '../mock-data/data';
import { sectionDescriptions } from '../mock-data/data';
import { CityObjectHeader } from './CityObjectHeader';
import { pageTitles } from '../mock-data/data';



export const CityObject = () => {
  useEffect(() => {
    document.title =  pageTitles.landmarks;
  }, [])
  
  return (
    <div className='objects-wrapper'>
      <CityObjectHeader landmarksDescriptions={sectionDescriptions}/>
      <CityObjectCard landmarksData={landmarks}/>
    </div>
  )
};
