import React from "react";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { BootstrapTooltip } from "../UI/Themes";
import { Link } from 'react-router-dom';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StarIcon from '@mui/icons-material/Star';
import { styles } from '../UI/CityObjectsCardStyles';
import '../UI/CityObject.css';

export const CityObjectCard = (props) => {
  return (
    <div className="cards-wrapper">
      {props.hotelsData.map((hotel) => {
        return (
          <Card
            sx={styles.cityObjectCard}
            key={hotel.id}
          >
            <CardActionArea disableRipple>
              <CardMedia
                component="img"
                height="250"
                image={hotel.img}
                alt={hotel.name}
              />
              <CardContent sx={styles.cardContent}>
                <Typography gutterBottom variant="h5" component="div">
                  {hotel.name} {hotel.star}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {hotel.shortDescription}
                </Typography>
              </CardContent>
            </CardActionArea>
            
            <Box sx={{ maxWidth: 420 }}>
              <BottomNavigation
                showLabels
              > 
              <BootstrapTooltip title={hotel.stars}>
                <BottomNavigationAction
                  label={hotel.star}
                  icon={<StarIcon/>}
                />
              </BootstrapTooltip>
              <BootstrapTooltip title='Ценови диапазон:'>
                <BottomNavigationAction
                  label={hotel.priceRange}
                  icon={<LocalOfferIcon />}
                />
              </BootstrapTooltip>
              <BootstrapTooltip title='Адрес:'>
                <BottomNavigationAction
                  label={hotel.address}
                  icon={<LocationOnIcon />}
                />
              </BootstrapTooltip>
              </BottomNavigation>
            </Box>

            <CardActions sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '15px'}}>
              <Link to=''>
                <Button size="small" color="primary" variant="outlined" sx={{marginTop: '15px'}}>
                  Разгледай
                </Button>
              </Link>
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
};
