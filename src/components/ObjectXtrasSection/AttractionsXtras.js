import React from 'react';
import classes from './ObjectXtras.module.css';
import BusinessIcon from '@mui/icons-material/Business';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import LanguageIcon from '@mui/icons-material/Language';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { ScrollToTopButton } from '../UI/ScrollToTopButton';
import { Link } from 'react-router-dom';

 export const AttractionsXtras = (props) => {
  return (
    <div className={classes['extras-wrapper']}>
            {props.attractionsExtras.map((extras) => {
                return (
                <React.Fragment key={extras.id}>
                <ul>
                    <li key={extras.id}><HistoryToggleOffIcon/> <span>{extras.workTime}</span></li>
                    <li><LocalOfferIcon/> <span>{extras.prices === `` ? <p>няма точна информация</p> : extras.prices}</span></li>
                    <li><PhoneForwardedIcon/> <span>{extras.phoneNumber}</span></li>
                    <li><BusinessIcon/> <span>{extras.address}</span></li>
                    <li><LanguageIcon/> <span>{extras.website === `` ? <p>няма</p> : <Link to={extras.website} target='_blank'> Официален уебсайт </Link>}</span></li>
                    <li><AddLocationIcon/> <span><Link to={extras.gps} target='_blank'> Заведи ме там </Link></span></li>
                </ul>
                </React.Fragment>
                )
            })}
            <ScrollToTopButton/>
        </div>
  )
}
