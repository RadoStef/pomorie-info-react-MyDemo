import React from 'react';
import classes from './ObjectXtras.module.css';
import BusinessIcon from '@mui/icons-material/Business';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import LanguageIcon from '@mui/icons-material/Language';
import { ScrollToTopButton } from '../UI/ScrollToTopButton';
import { Link } from 'react-router-dom';

 export const LandmarksXtras = (props) => {
  return (
    <div className={classes['extras-wrapper']}>
            {props.landmarksExtras.map((extras) => {
                return (
                <>
                <ul key={extras.id}>
                    <li><HistoryToggleOffIcon/> <span>{extras.workTime}</span></li>
                    <li><PhoneForwardedIcon/> <span>{extras.phoneNumber}</span></li>
                    <li><BusinessIcon/> <span>{extras.address}</span></li>
                    <li><LanguageIcon/> <span>{extras.website === `` ? <p>няма</p> : <Link to={extras.website} target='_blank'> Официален уебсайт </Link>}</span></li>
                    <li><AddLocationIcon/> <span><Link to={extras.gps} target='_blank'> Заведи ме там </Link></span></li>
                </ul>
                <ScrollToTopButton/>
                </>
                )
            })}
        </div>
  )
}
