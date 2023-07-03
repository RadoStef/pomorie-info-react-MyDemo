import React from 'react';
import classes from './ObjectXtras.module.css';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import BusinessIcon from '@mui/icons-material/Business';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import { ScrollToTopButton } from '../UI/ScrollToTopButton';
import { Link } from 'react-router-dom';

 export const ParkingsXtras = (props) => {
  return (
    <div className={classes['extras-wrapper']}>
            {props.parkingExtras.map((extras) => {
                return (
                <>
                <ul key={extras.id}>
                    <li ><MonetizationOnIcon/> <span>{extras.tag}</span></li>
                    <li><LocalOfferIcon/> <span>{extras.prices}</span></li>
                    <li><BusinessIcon/> <span>{extras.address}</span></li>
                    <li><AddLocationIcon/> <Link to={extras.gps}> Заведи ме там </Link></li>
                </ul>
                <ScrollToTopButton/>
                </>
                )
            })}
        </div>
  )
}
