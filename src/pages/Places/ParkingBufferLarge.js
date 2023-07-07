import React, { useEffect } from 'react';
import bufferChurch1 from '../../assets/parkings/bufferChurch/bufferChurchEntry.jpg';
import bufferChurch2 from '../../assets/parkings/bufferChurch/bufferChurch2.jpg';
import bufferChurch3 from '../../assets/parkings/bufferChurch/bufferChurch3.jpg';
import bufferChurch4 from '../../assets/parkings/bufferChurch/bufferChurch4.jpg';
import bufferChurch5 from '../../assets/parkings/bufferChurch/bufferChurch5.jpg';
import bufferChurch6 from '../../assets/parkings/bufferChurch/bufferChurch6.jpg';
import bufferChurch7 from '../../assets/parkings/bufferChurch/bufferChurch7.jpg';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";
import { AppHeaderBar } from "../../components/HeaderSection/AppHeaderBar";
import { ParkingsXtras } from '../../components/ObjectXtrasSection/ParkingsXtras';
import { ObjectDescriptionCard } from '../../components/UI/ObjectDescriptionCard';
import { ObjectDescription } from "../../components/ObjectDescriptionSection/ObjectDescription";
import { parkings, goToTop } from '../../components/mock-data/data';
import { Footer } from "../../components/Footer/Footer";
import { MapSection } from "../../components/ObjectMapSection/ObjectMap";
import { Button } from "@mui/material";
import { Breadcrumb } from "../../components/BreadCrumbSection/Breadcrumb";
import classes from '../../components/ObjectMapSection/ObjectMap.module.css';
import { NextObject } from "../../components/UI/NextObject";

const objectName = parkings.slice(0, 1).map(parkingName => parkingName.name);
const objectDescription = parkings.slice(0, 1).map(parkingDesc => parkingDesc.description);
const parkingXtras = parkings.slice(0, 1);
const images = [bufferChurch1, bufferChurch2, bufferChurch3, bufferChurch4, bufferChurch5, bufferChurch6, bufferChurch7];
const backLink = <Link to='/parkings'> <Button> <ArrowBackIcon/> </Button></Link>

const mapContent = 
<div className={classes.mapouter}>
    <div className={classes['gmap-canvas']}>
        <iframe className={classes['gmap-iframe']} width="100%" frameborder="0" src="https://maps.google.com/maps?width=800&amp;height=500&amp;hl=en&amp;q=42.562059,27.6304533&amp;t=k&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" title='Object Map'></iframe>
    </div>
</div>

export const ParkingBufferLarge = () => {
  useEffect(() => {
    goToTop();
  }, []);

  return (
    <>
        <ObjectDescriptionCard>
            <AppHeaderBar/>
            <Breadcrumb backLink={backLink}/>
            <ObjectDescription images={images} text={objectDescription} objectName={objectName}/>
            <ParkingsXtras parkingExtras={parkingXtras}/>
            <Link to='/buffer-kapka'><NextObject/></Link>
            <MapSection map={mapContent}/>
        </ObjectDescriptionCard>
        <Footer/>
    </>
  )
};