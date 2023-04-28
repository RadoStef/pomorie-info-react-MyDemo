import React from 'react';
import './CustomCard.css';

export const CustomCard = props => {
  return (
    <div className='container'>
      <div className="logo-wrapper">
          <img
            src="https://peex.softserveinc.com/assets/logo-min.svg"
            alt="peex logo"
          />
      </div>
      {props.children}
    </div>
  )
};
