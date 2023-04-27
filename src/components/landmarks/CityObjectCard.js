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


export const CityObjectCard = (props) => {
  return (
    <div className="cards-wrapper">
      {props.landmarksData.map((landmark) => {
        return (
          <Card
            sx={{ width: 420, height: 700, margin: "20px" }}
            key={landmark.id}
          >
            <CardActionArea disableRipple>
              <CardMedia
                component="img"
                height="250"
                image={landmark.img}
                alt="green iguana"
              />
              <CardContent sx={{ height: "300px" }}>
                <Typography gutterBottom variant="h5" component="div">
                  {landmark.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {landmark.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            
            <Box sx={{ maxWidth: 420 }}>
              <BottomNavigation
                showLabels
              > 
              <BootstrapTooltip title='Телефон за връзка:'>
                <BottomNavigationAction
                  label={landmark.phoneNumber}
                  icon={<PhoneForwardedIcon/>}
                />
              </BootstrapTooltip>
              <BootstrapTooltip title='Работно време:'>
                <BottomNavigationAction
                  label={landmark.workTime}
                  icon={<HistoryToggleOffIcon />}
                />
              </BootstrapTooltip>
              <BootstrapTooltip title='Адрес:'>
                <BottomNavigationAction
                  label={landmark.address}
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
