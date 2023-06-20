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
import PaidIcon from '@mui/icons-material/Paid';
import Chip from '@mui/material/Chip';
import { Button, CardActionArea, CardActions } from "@mui/material";
import { BootstrapTooltip } from "../UI/Themes";
import { Link } from 'react-router-dom';
import '../UI/CityObject.css';
import { iconStyle, cardStyle } from "../UI/Themes";
import { styles } from '../UI/CityObjectsCardStyles';


export const CityObjectCard = (props) => {
  return (
    <div className="cards-wrapper">
      {props.parkingsData.map((parking) => {
        return (
          <Card
            sx={styles.cityObjectCard}
            key={parking.id}
          >
            <CardActionArea 
              sx={cardStyle}
              disableRipple>
              <CardMedia
                component="img"
                height="250"
                image={parking.img}
                alt={parking.name}
              />
              <CardContent sx={styles.cardContent}>
                <Typography gutterBottom variant="h5" component="div">
                  {parking.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {parking.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            
            <Box sx={{ maxWidth: 420 }}>
              <BottomNavigation
                showLabels
              > 
              <BootstrapTooltip title='Режим на паркинга:'>
                <BottomNavigationAction
                  label={parking.status}
                  icon={<PaidIcon sx={iconStyle}/>}
                />
              </BootstrapTooltip>
              <BootstrapTooltip title='Цени за паркиране:'>
                <BottomNavigationAction
                  label={parking.prices}
                  icon={<HistoryToggleOffIcon sx={iconStyle}/>}
                />
              </BootstrapTooltip>
              <BootstrapTooltip title='Адрес:'>
                <BottomNavigationAction
                  label={parking.address}
                  icon={<LocationOnIcon sx={iconStyle}/>}
                />
              </BootstrapTooltip>
              </BottomNavigation>
            </Box>

            <CardActions sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '15px'}}>
              <Chip label={parking.tag} color={parking.tag === 'Буферен / Безплатен' ? 'success' : 'info'} sx={{marginTop: '15px'}}/>
              <Link to=''>
                <Button size="medium" color="primary" variant="outlined" sx={{marginTop: '15px'}}>
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
