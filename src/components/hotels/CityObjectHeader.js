import React from 'react';
import '../UI/CityObject.css';

export const CityObjectHeader = props => {
    const sectionInformation = props.hotelsDescriptions.map((desc) => desc.hotels.description);
    const sectionHeader = props.hotelsDescriptions.map((desc) => desc.hotels.header);

  return (
    <div className='section-header-wrapper'>
      <h2>{sectionHeader}</h2>
      <p>{sectionInformation}</p>
    </div>
  )
};
