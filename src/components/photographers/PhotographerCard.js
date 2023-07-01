import React, { useState } from 'react';
import { photographersAndGalleries } from '../mock-data/data';
import FsLightbox from 'fslightbox-react';
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import classes from './PhotographerCard.module.css';

export const PhotographerCard = () => {
  const [toggler, setToggler] = useState(false);
  const [currentGallery, setCurrentGallery] = useState([]);

  const toggleHandler = (gallery) => {
    setCurrentGallery(gallery);
    setToggler(!toggler);
  };

  return (
    <div>
      {photographersAndGalleries.map((photographer) => {
        return (
          <div className={classes['photographer-wrapper']} key={photographer.name}>
            <div className={classes['photographer-logo-wrapper']}>
              <img src={photographer.image} alt={photographer.name} />
            </div>

            <div>
              <p>Фотограф: <b>{photographer.name}</b></p>
              <p>От: <b>{photographer.location}</b></p>
              <p>
                уебсайт:
                {photographer.website === '' ? (
                  <span>'няма'</span>
                ) : (
                    <Link to={photographer.website} target='_blank'> Разгледай Тук </Link>
                  )}
              </p>
              <p><b>{photographer.gallery.length}</b> снимки в галерията</p>
            </div>

            <Carousel dynamicHeight emulateTouch width='100%' showThumbs={false}>
              {photographer.gallery.map((image, index) => {
                return (
                  <div key={index} >
                    <img src={image} alt={`${index + 1}`}  />
                    <p className="legend">Фотограф: {photographer.name}</p>
                  </div>
                )
              })}
            </Carousel>
            <button onClick={() => toggleHandler(photographer.gallery)} className={classes['lightbox-button']}> Разгледай на голям екран </button>
          </div>
        );
      })}

      {currentGallery.length > 0 && (
        <FsLightbox toggler={toggler} sources={currentGallery} />
      )}
    </div>
  );
};
