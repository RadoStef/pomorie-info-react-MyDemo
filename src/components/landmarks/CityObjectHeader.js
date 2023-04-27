import React from 'react';
import '../UI/CityObject.css';

export const CityObjectHeader = props => {
    const sectionInformation = props.landmarksDescriptions.map((desc) => desc.landmarks.description);
    const sectionHeader = props.landmarksDescriptions.map((desc) => desc.landmarks.header);

  return (
    <div className='section-header-wrapper'>
      <h2>{sectionHeader}</h2>
      <p>{sectionInformation}</p>
    </div>
  )
};
