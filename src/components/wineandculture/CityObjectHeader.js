import React from 'react';
import '../UI/CityObject.css';

export const CityObjectHeader = props => {
    const sectionInformation = props.cultureDescriptions.map((desc) => desc.culture.description);
    const sectionHeader = props.cultureDescriptions.map((desc) => desc.culture.header);

  return (
    <div className='section-header-wrapper'>
      <h2>{sectionHeader}</h2>
      <p>{sectionInformation}</p>
    </div>
  )
};
