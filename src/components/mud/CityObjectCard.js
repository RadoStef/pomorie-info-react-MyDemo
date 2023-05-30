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
import LanguageIcon from '@mui/icons-material/Language';
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import { styles } from '../UI/CityObjectsCardStyles';
import '../UI/CityObject.css';

export const CityObjectCard = (props) => {
  return (
    <div className="cards-wrapper">
      {props.mudData.map((mudObjects) => {
        return (
          <Card
            sx={styles.cityObjectCard}
            key={mudObjects.id}
          >
            <CardActionArea disableRipple>
              <CardMedia
                component="img"
                height="250"
                image={mudObjects.img}
                alt={mudObjects.name}
              />
              <CardContent sx={styles.cardContent}>
                <Typography gutterBottom variant="h5" component="div">
                  {mudObjects.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {mudObjects.shortDescription}
                </Typography>
              </CardContent>
            </CardActionArea>
            
            <Box sx={{ maxWidth: 420 }}>
              <BottomNavigation
                showLabels
              > 
              <BootstrapTooltip title={mudObjects.phoneNumber}>
                <BottomNavigationAction
                  label={mudObjects.phoneNumber}
                  icon={<PhoneForwardedIcon/>}
                />
              </BootstrapTooltip>
              <BootstrapTooltip title='Официален уебсайт'>
                <Link to={mudObjects.website} target="_blank">
                  <BottomNavigationAction
                    label={mudObjects.website}
                    icon={<LanguageIcon/>}
                  />
                </Link>
              </BootstrapTooltip>
              <BootstrapTooltip title='Адрес:'>
                <BottomNavigationAction
                  label={mudObjects.address}
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
