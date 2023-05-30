import React from 'react';
import '../UI/CityObject.css';

export const CityObjectHeader = props => {
    const sectionInformation = props.mudDescriptions.map((desc) => desc.mud.description);
    const sectionHeader = props.mudDescriptions.map((desc) => desc.mud.header);

  return (
      <div className='section-header-wrapper'>
        <h2>{sectionHeader}</h2>
        <p>{sectionInformation}</p>
      </div>
  )
};
