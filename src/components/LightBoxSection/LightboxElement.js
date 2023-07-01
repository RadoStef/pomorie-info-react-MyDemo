import React, { useState } from 'react';
import { mainPageLightboxData } from '../mock-data/data';
import FsLightbox from 'fslightbox-react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import classes from './LightboxElement.module.css';
import { HomepageSectionsCard } from '../UI/HomepageSectionsCard';
import { Link } from 'react-router-dom';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
  };
}

export const LightboxElement = () => {
  const [toggler, setToggler] = useState(false);

  return (
    <HomepageSectionsCard>
      <div>
        <h2>Вижте красотата на Поморие. Разгледайте фото галерии <Link to='/beauty-of-pomorie'> Тук </Link></h2>
      </div>
      <div className={classes.gallery}>
        <ImageList sx={{ width: '100%', height: 760 }} variant='quilted' cols={4} rowHeight={250}>
          {mainPageLightboxData.map((item) => (
            <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
              <img
                {...srcset(item.img, 121, item.rows, item.cols)}
                alt={item.title}
                loading='lazy'
                onClick={() => setToggler(!toggler)}
              />
            </ImageListItem>
          ))}
        </ImageList>
        <FsLightbox toggler={toggler} sources={mainPageLightboxData.map((img) => img.img)} />
      </div>
    </HomepageSectionsCard>
  );
};
