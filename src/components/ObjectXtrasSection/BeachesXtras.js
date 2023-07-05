import React from 'react';
import classes from './ObjectXtras.module.css';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import WcIcon from '@mui/icons-material/Wc';
import PoolIcon from '@mui/icons-material/Pool';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import NightlifeIcon from '@mui/icons-material/Nightlife';
import ShowerIcon from '@mui/icons-material/Shower';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import { ScrollToTopButton } from '../UI/ScrollToTopButton';

export const BeachesExtras = (props) => {
    return(
        <div className={classes['extras-wrapper']}>
            {props.beachExtras.map((extras) => {
                return (
                <>
                <ul key={extras.id}>
                    <li ><BeachAccessIcon/> <span>{extras.regime}</span></li>
                    <li><LocalOfferIcon/> <span>{extras.price}</span></li>
                    <li><WcIcon/> <span>{extras.toilet}</span></li>
                    <li><PoolIcon/> <span>{extras.lifeguard}</span></li>
                    <li><HistoryToggleOffIcon/> <span>{extras.lifeguardWorkingTime}</span></li>
                    <li><ShowerIcon/> <span>{extras.showers}</span></li>
                    <li><CheckroomIcon/> <span>{extras.changingPlace}</span></li>
                    <li><RestaurantIcon/> <span>{extras.restaurant}</span></li>
                    <li><NightlifeIcon/> <span>{extras.nightLife}</span></li>
                </ul>
                <ScrollToTopButton/>
                </>
                )
            })}
        </div>
    )
}