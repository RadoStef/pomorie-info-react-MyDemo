import React from 'react';
import classes from './ObjectXtras.module.css';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import BusinessIcon from '@mui/icons-material/Business';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import LanguageIcon from '@mui/icons-material/Language';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import { ScrollToTopButton } from '../UI/ScrollToTopButton';
import { Link } from 'react-router-dom';

 export const MuseumsXtras = (props) => {
  return (
    <div className={classes['extras-wrapper']}>
            {props.museumsExtras.map((extras) => {
                return (
                <>
                <ul key={extras.id}>
                    <li><MonetizationOnIcon/> <span> Цени: {extras.prices}</span></li>
                    <li><HistoryToggleOffIcon/> <span>{extras.workTime}</span></li>
                    <li><PhoneForwardedIcon/> <span>{extras.phoneNumber}</span></li>
                    <li><BusinessIcon/> <span>{extras.address}</span></li>
                    <li><LanguageIcon/> <span><Link to={extras.website} target='_blank'> Официален уебсайт </Link></span></li>
                    <li><AddLocationIcon/> <span><Link to={extras.gps} target='_blank'> Заведи ме там </Link></span></li>
                </ul>
                <ScrollToTopButton/>
                </>
                )
            })}
        </div>
  )
}
