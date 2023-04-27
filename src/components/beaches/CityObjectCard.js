import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { Button, CardActionArea, CardActions } from "@mui/material";
import { BootstrapTooltip } from "../UI/Themes";
import { Link } from 'react-router-dom';
import '../UI/CityObject.css';
import { styles } from '../UI/CityObjectsCardStyles';

export const CityObjectCard = (props) => {
  
  return (
    <div className="cards-wrapper">
      {props.beachesData.map((beaches) => {
        const zonePrice = (beaches.price === "Безплатен") ? 'Безплатен плаж' : 'Цени в платената зона:';
        return (
          <Card
            sx={styles.cityObjectCard}
            key={beaches.id}
          >
            <CardActionArea disableRipple>
              <CardMedia
                component="img"
                height="250"
                image={beaches.img}
                alt="green iguana"
              />
              <CardContent sx={styles.cardContent}>
                <Typography gutterBottom variant="h5" component="div">
                  {beaches.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {beaches.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            
            <Box sx={{ maxWidth: 420 }}>
              <BottomNavigation
                showLabels
              > 
              <BootstrapTooltip title='Режим на зоната:'>
                <BottomNavigationAction
                  label={beaches.regime}
                  icon={<BeachAccessIcon/>}
                />
              </BootstrapTooltip>
              <BootstrapTooltip title={zonePrice}>
                <BottomNavigationAction
                  label={beaches.price}
                  icon={<LocalOfferIcon />}
                />
              </BootstrapTooltip>
              <BootstrapTooltip title='Местоположение:'>
                <BottomNavigationAction
                  label={beaches.address}
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
