import React from 'react';
import '../UI/CityObject.css';

export const CityObjectHeader = props => {
    const sectionInformation = props.beachesDescriptions.map((desc) => desc.beaches.description);
    const sectionHeader = props.beachesDescriptions.map((desc) => desc.beaches.header);

  return (
    <div className='section-header-wrapper'>
      <h2>{sectionHeader}</h2>
      <p>{sectionInformation}</p>
    </div>
  )
};
