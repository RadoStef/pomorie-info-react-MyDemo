import React from 'react';
import municipality1 from '../../assets/parkings/municipality/parking-obshtina1.jpg';
import municipality2 from '../../assets/parkings/municipality/parking-obshtina2.jpg';
import municipality3 from '../../assets/parkings/municipality/parking-obshtina3.jpg';
import municipality4 from '../../assets/parkings/municipality/parking-obshtina4.jpg';
import municipality5 from '../../assets/parkings/municipality/parking-obshtina5.jpg';
import municipality6 from '../../assets/parkings/municipality/parking-obshtina6.jpg';
import municipality7 from '../../assets/parkings/municipality/parking-obshtina7.jpg';
import municipality8 from '../../assets/parkings/municipality/parking-obshtina8.jpg';
import municipality9 from '../../assets/parkings/municipality/parking-obshtina9.jpg';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";
import { AppHeaderBar } from "../../components/HeaderSection/AppHeaderBar";
import { ParkingsXtras } from '../../components/ObjectXtrasSection/ParkingsXtras';
import { ObjectDescriptionCard } from '../../components/UI/ObjectDescriptionCard';
import { ObjectDescription } from "../../components/ObjectDescriptionSection/ObjectDescription";
import { parkings } from '../../components/mock-data/data';
import { Footer } from "../../components/Footer/Footer";
import { MapSection } from "../../components/ObjectMapSection/ObjectMap";
import { Button } from "@mui/material";
import { Breadcrumb } from "../../components/BreadCrumbSection/Breadcrumb";
import classes from '../../components/ObjectMapSection/ObjectMap.module.css';
import { NextObject } from "../../components/UI/NextObject";
import { PreviousObject } from '../../components/UI/PreviousObject';

const objectName = parkings.slice(4, 5).map(parkingName => parkingName.name);
const objectDescription = parkings.slice(4, 5).map(parkingDesc => parkingDesc.description);
const bufferLarge = parkings.slice(4, 5);
const images = [municipality1, municipality2, municipality3, municipality4, municipality5, municipality6, municipality7, municipality8, municipality9];
const backLink = <Link to='/parkings'> <Button> <ArrowBackIcon/> </Button></Link>

const mapContent = 
<div className={classes.mapouter}>
    <div className={classes['gmap-canvas']}>
        <iframe className={classes['gmap-iframe']} width="100%" frameborder="0" src="https://maps.google.com/maps?width=800&amp;height=500&amp;hl=en&amp;q=42.558522,27.6426542&amp;t=h&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" title='Object Map'></iframe>
    </div>
</div>


export const ParkingMunicipality = () => {
  return (
    <>
        <ObjectDescriptionCard>
            <AppHeaderBar/>
            <Breadcrumb backLink={backLink}/>
            <ObjectDescription images={images} text={objectDescription} objectName={objectName}/>
            <ParkingsXtras parkingExtras={bufferLarge}/>
            <Link to='/parking-zone'><PreviousObject/></Link>
            <Link to='/parking-trafficlights'><NextObject/></Link>
            <MapSection map={mapContent}/>
        </ObjectDescriptionCard>
        <Footer/>
    </>
  )
};
