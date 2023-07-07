import React from 'react';
import classes from './ObjectXtras.module.css';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import BusinessIcon from '@mui/icons-material/Business';
import { ScrollToTopButton } from '../UI/ScrollToTopButton';
import { Link } from 'react-router-dom';
import DirectionsIcon from '@mui/icons-material/Directions';
import { Button } from '@mui/material';

 export const ParkingsXtras = (props) => {
  return (
    <div className={classes['extras-wrapper']}>
            {props.parkingExtras.map((extras) => {
                return (
                <React.Fragment key={extras.id}>
                <ul>
                    <li key={extras.id}><MonetizationOnIcon/> <span>{extras.tag}</span></li>
                    <li><LocalOfferIcon/> <span>{extras.prices}</span></li>
                    <li><BusinessIcon/> <span>{extras.address}</span></li>
                    <li><Link to={extras.gps} target='_blank'> <Button variant='outlined'> Заведи ме там <DirectionsIcon sx={{marginLeft: '10px'}}/> </Button> </Link></li>
                </ul>
                </React.Fragment>
                )
            })}
            <ScrollToTopButton/>
        </div>
  )
}
