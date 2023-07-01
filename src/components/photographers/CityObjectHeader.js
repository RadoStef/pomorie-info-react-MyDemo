import React from 'react';
import '../UI/CityObject.css';

export const CityObjectHeader = props => {

  return (
    <div className='section-header-wrapper'>
      <p>{props.photographersDescriptions}</p>
    </div>
  )
};
