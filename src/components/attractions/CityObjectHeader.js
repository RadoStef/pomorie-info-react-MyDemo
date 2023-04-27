import React from 'react';
import '../UI/CityObject.css';

export const CityObjectHeader = props => {
    const sectionInformation = props.attractionsDescriptions.map((desc) => desc.attractions.description);
    const sectionHeader = props.attractionsDescriptions.map((desc) => desc.attractions.header);

  return (
    <div className='section-header-wrapper'>
      <h2>{sectionHeader}</h2>
      <p>{sectionInformation}</p>
    </div>
  )
};
