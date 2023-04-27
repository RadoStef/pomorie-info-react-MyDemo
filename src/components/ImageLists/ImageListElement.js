import React from 'react';
import { news } from '../mock-data/news';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import { BootstrapTooltip } from '../UI/Themes';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { Link } from 'react-router-dom';

export const ImageListElement = () => {
  return (
    <ImageList sx={{ width: '65%', height: 700, margin: '30px 0 30px 0', borderRadius: '8px' }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div" sx={{ backgroundColor: '#83aed3', color: 'white'}}><h2 style={{margin: 0}}>Новини</h2></ListSubheader>
      </ImageListItem>
      {news.map((item) => (
        <ImageListItem key={item.image}>
          <img
            src={`${item.image}?w=248&fit=crop&auto=format`}
            srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
          sx={{ height: '100px', fontSize: '22px'}}
            title={item.title}
            subtitle={`Източник: ${item.author}`}
            actionIcon={
              <IconButton
                sx={{ marginRight: '15px', background: 'white', color: 'black' }}
                aria-label={`info about ${item.title}`}
              > 
              <BootstrapTooltip title={'Прочети новината...'}>
                  <Link to={item.source} target='_blank'><AutoStoriesIcon/></Link> 
              </BootstrapTooltip>
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};
