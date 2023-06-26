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
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import { iconStyle, cardStyle, cardImageStyle } from "../UI/Themes";
import { styles } from '../UI/CityObjectsCardStyles';
import '../UI/CityObject.css';
import { showMore } from "../mock-data/data";



export const CityObjectCard = (props) => {
  return (
    <div className="cards-wrapper">
      {props.attractionsData.map((attraction) => {
        return (
          <Card
            sx={styles.cityObjectCard}
            key={attraction.id}
          >
            <CardActionArea 
              sx={cardStyle}
              disableRipple>
              <CardMedia
                component="img"
                sx={cardImageStyle}
                image={attraction.img}
                alt={attraction.name}
              />
              <CardContent sx={styles.cardContent}>
                <Typography gutterBottom variant="h5" component="div">
                  {attraction.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                <b>Кратко описание:</b> {attraction.description.slice(0, 300)}
                <Link to={attraction.linkTo}> ...Виж повече</Link>
                </Typography>
              </CardContent>
            </CardActionArea>
            
            <Box sx={{ maxWidth: 420, marginTop: '30px' }}>
              <BottomNavigation
                showLabels
              > 
              <BootstrapTooltip title='Телефон за връзка:'>
                <BottomNavigationAction
                  label={attraction.phoneNumber}
                  icon={<PhoneForwardedIcon sx={iconStyle}/>}
                />
              </BootstrapTooltip>
              <BootstrapTooltip title='Работно време:'>
                <BottomNavigationAction
                  label={attraction.workTime}
                  icon={<HistoryToggleOffIcon sx={iconStyle}/>}
                />
              </BootstrapTooltip>
              <BootstrapTooltip title='Адрес:'>
                <BottomNavigationAction
                  label={attraction.address}
                  icon={<LocationOnIcon sx={iconStyle}/>}
                />
              </BootstrapTooltip>
              </BottomNavigation>
            </Box>

            <CardActions sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '15px'}}>
              <Link to=''>
                <Button size="medium" color="primary" variant="outlined" sx={{marginTop: '15px'}}>
                  {showMore}
                </Button>
              </Link>
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
};
