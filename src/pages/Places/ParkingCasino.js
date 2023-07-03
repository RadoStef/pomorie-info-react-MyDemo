import React from 'react';
import casino1 from '../../assets/parkings/saintGeorge/saintGeorge11.jpg';
import casino2 from '../../assets/parkings/saintGeorge/saintGeorge12.jpg';
import casino3 from '../../assets/parkings/saintGeorge/saintGeorge13.jpg';
import casino4 from '../../assets/parkings/saintGeorge/saintGeorge14.jpg';
import casino5 from '../../assets/parkings/saintGeorge/st-george.jpg';
import casino6 from '../../assets/parkings/saintGeorge/st-george1.jpg';
import casino7 from '../../assets/parkings/saintGeorge/st-george2.jpg';
import casino8 from '../../assets/parkings/saintGeorge/st-george3.jpg';

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

const objectName = parkings.slice(10, 11).map(parkingName => parkingName.name);
const objectDescription = parkings.slice(10, 11).map(parkingDesc => parkingDesc.description);
const bufferLarge = parkings.slice(10, 11);
const images = [casino1, casino2, casino3, casino4, casino5, casino6, casino7, casino8];
const backLink = <Link to='/parkings'> <Button> <ArrowBackIcon/> </Button></Link>

const mapContent = 
<div className={classes.mapouter}>
    <div className={classes['gmap-canvas']}>
        <iframe className={classes['gmap-iframe']} width="100%" frameborder="0" src="https://maps.google.com/maps?width=800&amp;height=500&amp;hl=en&amp;q=42.5564667,27.6397384&amp;t=h&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" title='Object Map'></iframe>
    </div>
</div>


export const ParkingCasino = () => {
  return (
    <>
        <ObjectDescriptionCard>
            <AppHeaderBar/>
            <Breadcrumb backLink={backLink}/>
            <ObjectDescription images={images} text={objectDescription} objectName={objectName}/>
            <ParkingsXtras parkingExtras={bufferLarge}/>
            <Link to='/parking-mbal'><PreviousObject/></Link>
            <Link to='/parking-tuthon'><NextObject/></Link>
            <MapSection map={mapContent}/>
        </ObjectDescriptionCard>
        <Footer/>
    </>
  )
};
