import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';
import classes from './ObjectDescription.module.css';

export const ObjectDescription = ({ images, text, objectName }) => {
  const [toggler, setToggler] = useState(false);

  const toggleHandler = () => {
    setToggler(!toggler);
  };

  return (
    <>
      <div className={classes['section-wrapper']}>
        <div>
          <FsLightbox toggler={toggler} sources={images} />
        </div>
        <div className={classes['pictures-wrapper']}>
          <img
            className={classes['lightbox-img']}
            src={images[0]}
            alt='main'
            onClick={toggleHandler}
          />
          <button className={classes['gallery-btn']} onClick={toggleHandler}>
            фото галерия
          </button>
        </div>
        <div className={classes['description-wrapper']}>
          <h3>{objectName}</h3>
          <div>{text}</div>
        </div>
      </div>
    </>
  );
};
