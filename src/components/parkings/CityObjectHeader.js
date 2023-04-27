import React from 'react';
import '../UI/CityObject.css';

export const CityObjectHeader = props => {
    const sectionInformation = props.parkingsDescriptions.map((desc) => desc.parkings.description);
    const sectionHeader = props.parkingsDescriptions.map((desc) => desc.parkings.header);

  return (
    <div className='section-header-wrapper'>
      <h2>{sectionHeader}</h2>
      <p>{sectionInformation}</p>
    </div>
  )
};
