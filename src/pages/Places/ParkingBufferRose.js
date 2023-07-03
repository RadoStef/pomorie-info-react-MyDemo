import React from 'react';
import bufferRose1 from '../../assets/parkings/bufferRoseGardens/bufferRose1.jpg';
import bufferRose2 from '../../assets/parkings/bufferRoseGardens/bufferRose2.jpg';
import bufferRose3 from '../../assets/parkings/bufferRoseGardens/bufferRose3.jpg';
import bufferRose4 from '../../assets/parkings/bufferRoseGardens/bufferRose4.jpg';
import bufferRose5 from '../../assets/parkings/bufferRoseGardens/bufferRose5.jpg';

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

const objectName = parkings.slice(2, 3).map(parkingName => parkingName.name);
const objectDescription = parkings.slice(2, 3).map(parkingDesc => parkingDesc.description);
const parkingXtras = parkings.slice(2, 3);
const images = [bufferRose1, bufferRose2, bufferRose3, bufferRose4, bufferRose5];
const backLink = <Link to='/parkings'> <Button> <ArrowBackIcon/> </Button></Link>

const mapContent = 
<div className={classes.mapouter}>
    <div className={classes['gmap-canvas']}>
        <iframe className={classes['gmap-iframe']} width="100%" frameborder="0" src="https://maps.google.com/maps?width=800&amp;height=500&amp;hl=en&amp;q=42.5646399,27.6403811&amp;t=h&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" title='Object Map'></iframe>
    </div>
</div>

export const ParkingBufferRose = () => {
  return (
    <>
        <ObjectDescriptionCard>
            <AppHeaderBar/>
            <Breadcrumb backLink={backLink}/>
            <ObjectDescription images={images} text={objectDescription} objectName={objectName}/>
            <ParkingsXtras parkingExtras={parkingXtras}/>
            <Link to='/buffer-kapka'><PreviousObject/></Link>
            <Link to='/parking-zone'><NextObject/></Link>
            <MapSection map={mapContent}/>
        </ObjectDescriptionCard>
        <Footer/>
    </>
  )
};
