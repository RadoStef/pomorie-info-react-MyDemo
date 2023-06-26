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
import { iconStyle, cardStyle, cardImageStyle } from "../UI/Themes";
import { styles } from '../UI/CityObjectsCardStyles';
import '../UI/CityObject.css';
import { showMore } from "../mock-data/data";

export const CityObjectCard = (props) => {
  return (
    <div className="cards-wrapper">
      {props.mudData.map((mudObjects) => {
        return (
          <Card
            sx={styles.cityObjectCard}
            key={mudObjects.id}
          >
            <CardActionArea 
              sx={cardStyle}
              disableRipple>
              <CardMedia
                component="img"
                sx={cardImageStyle}
                image={mudObjects.img}
                alt={mudObjects.name}
              />
              <CardContent sx={styles.cardContent}>
                <Typography gutterBottom variant="h5" component="div">
                  {mudObjects.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                <b>Кратко описание:</b> {mudObjects.shortDescription.slice(0, 300)}
                <Link to={mudObjects.linkTo}> ...Виж повече</Link>
                </Typography>
              </CardContent>
            </CardActionArea>
            
            <Box sx={{ maxWidth: 420, marginTop: '30px' }}>
              <BottomNavigation
                showLabels
              > 
              <BootstrapTooltip title={mudObjects.phoneNumber}>
                <BottomNavigationAction
                  label={mudObjects.phoneNumber}
                  icon={<PhoneForwardedIcon sx={iconStyle}/>}
                />
              </BootstrapTooltip>
              <BootstrapTooltip title='Официален уебсайт'>
                <Link to={mudObjects.website} target="_blank">
                  <BottomNavigationAction
                    label={mudObjects.website}
                    icon={<LanguageIcon sx={iconStyle}/>}
                  />
                </Link>
              </BootstrapTooltip>
              <BootstrapTooltip title='Адрес:'>
                <BottomNavigationAction
                  label={mudObjects.address}
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
