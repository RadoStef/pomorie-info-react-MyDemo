import React from 'react';
import './CustomCard.css';

export const CustomCard = props => {
  return (
    <div className='card-container'>
      {props.children}
    </div>
  )
};
