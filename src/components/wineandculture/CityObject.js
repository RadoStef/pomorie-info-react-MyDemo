import React, { useEffect } from 'react';
import '../UI/CityObject.css';
import { CityObjectCard } from './CityObjectCard';
import { wineAndCulture } from '../mock-data/data';
import { sectionDescriptions } from '../mock-data/data';
import { CityObjectHeader } from './CityObjectHeader';
import { pageTitles } from '../mock-data/data';



export const CityObject = () => {
  useEffect(() => {
    document.title =  pageTitles.culture;
  }, [])

  return (
    <div className='objects-wrapper'>
      <CityObjectHeader cultureDescriptions={sectionDescriptions}/>
      <CityObjectCard cultureData={wineAndCulture}/>
    </div>
  )
};
