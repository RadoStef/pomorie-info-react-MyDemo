import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import { Button, CardActionArea, CardActions } from "@mui/material";
import { BootstrapTooltip } from "../UI/Themes";
import { Link } from 'react-router-dom';
import '../UI/CityObject.css';
import { styles } from '../UI/CityObjectsCardStyles';


export const CityObjectCard = (props) => {
  return (
    <div className="cards-wrapper">
      {props.attractionsData.map((attraction) => {
        return (
          <Card
            sx={styles.cityObjectCard}
            key={attraction.id}
          >
            <CardActionArea disableRipple>
              <CardMedia
                component="img"
                height="250"
                image={attraction.img}
                alt="green iguana"
              />
              <CardContent sx={styles.cardContent}>
                <Typography gutterBottom variant="h5" component="div">
                  {attraction.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {attraction.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            
            <Box sx={{ maxWidth: 420 }}>
              <BottomNavigation
                showLabels
              > 
              <BootstrapTooltip title='Телефон за връзка:'>
                <BottomNavigationAction
                  label={attraction.phoneNumber}
                  icon={<PhoneForwardedIcon/>}
                />
              </BootstrapTooltip>
              <BootstrapTooltip title='Работно време:'>
                <BottomNavigationAction
                  label={attraction.workTime}
                  icon={<HistoryToggleOffIcon />}
                />
              </BootstrapTooltip>
              <BootstrapTooltip title='Адрес:'>
                <BottomNavigationAction
                  label={attraction.address}
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
