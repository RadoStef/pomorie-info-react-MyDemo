import React from 'react';
import '../UI/CityObject.css';

export const CityObjectHeader = props => {
    const sectionInformation = props.museumsDescriptions.map((desc) => desc.museums.description);
    const sectionHeader = props.museumsDescriptions.map((desc) => desc.museums.header);

  return (
    <div className='section-header-wrapper'>
      <h2>{sectionHeader}</h2>
      <p>{sectionInformation}</p>
    </div>
  )
};
