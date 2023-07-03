import React from 'react';
import blueZone1 from '../../assets/parkings/shortTermZone/shortTermZone1.jpg';
import blueZone2 from '../../assets/parkings/shortTermZone/shortTermZone2.jpg';
import blueZone3 from '../../assets/parkings/shortTermZone/shortTermZone3.jpg';
import blueZone4 from '../../assets/parkings/shortTermZone/shortTermZone4.jpg';
import blueZone5 from '../../assets/parkings/shortTermZone/sz-795x265--900.jpg';

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

const objectName = parkings.slice(3, 4).map(parkingName => parkingName.name);
const objectDescription = parkings.slice(3, 4).map(parkingDesc => parkingDesc.description);
const parkingXtras = parkings.slice(3, 4);
const images = [blueZone1, blueZone2, blueZone3, blueZone4, blueZone5];
const backLink = <Link to='/parkings'> <Button> <ArrowBackIcon/> </Button></Link>

const mapContent = 
<div className={classes.mapouter}>
    <div className={classes['gmap-canvas']}>
        <iframe className={classes['gmap-iframe']} width="100%" frameborder="0" src="https://maps.google.com/maps?width=800&amp;height=500&amp;hl=en&amp;q=42.5646399,27.6403811&amp;t=h&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" title='Object Map'></iframe>
    </div>
</div>

export const ParkingBlueZone = () => {
  return (
    <>
        <ObjectDescriptionCard>
            <AppHeaderBar/>
            <Breadcrumb backLink={backLink}/>
            <ObjectDescription images={images} text={objectDescription} objectName={objectName}/>
            <ParkingsXtras parkingExtras={parkingXtras}/>
            <Link to='/buffer-rose'><PreviousObject/></Link>
            <Link to='/parking-municipality'><NextObject/></Link>
            <MapSection map={mapContent}/>
        </ObjectDescriptionCard>
        <Footer/>
    </>
  )
};
