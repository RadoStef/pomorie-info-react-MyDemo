import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import classes from './LightboxElement.module.css';
import church1 from '../../assets/landmarks/church/church.jpg';
import church2 from '../../assets/landmarks/church/church0.jpg';
import church3 from '../../assets/landmarks/church/church1.jpg';
import church4 from '../../assets/landmarks/church/church2.jpg';
import church5 from '../../assets/landmarks/church/church3.jpg';
import church6 from '../../assets/landmarks/church/church4.jpg';
import church7 from '../../assets/landmarks/church/church5.jpg';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export const LightboxElement = (props) => {
	const [toggler, setToggler] = useState(false);

	return (
		<div className={classes.gallery}>
    <ImageList
      sx={{ width: '100%', height: 760 }}
      variant="quilted"
      cols={4}
      rowHeight={250}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1} >
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
            onClick={() => setToggler(!toggler)}
          />
        </ImageListItem>
      ))}
    </ImageList>
			<FsLightbox
				toggler={toggler}
				sources={
          itemData.map((img) => img.img)
				}
			/>
		</div>
	);
};

const itemData = [
  {
    img: church1,
    title: 'Seagull',
    cols: 2,
  },
  {
    img: church2,
    title: 'Gull',
  },
  {
    img: church3,
    title: 'MoreGulls',
  },
  {
    img: church4,
    title: 'Coffee',
    cols: 2,
  },
  {
    img: church5,
    title: 'Coffee',
    cols: 2,
  },
  {
    img: church6,
    title: 'Coffee',
    cols: 1,
  },
  {
    img: church7,
    title: 'Coffee',
    cols: 3,
  },
];