import React from 'react';
import houses1 from '../../assets/landmarks/oldhouses/houses.jpg';
import houses2 from '../../assets/landmarks/oldhouses/houses1.jpg';
import houses3 from '../../assets/landmarks/oldhouses/houses2.jpg';
import houses4 from '../../assets/landmarks/oldhouses/houses3.jpg';
import houses5 from '../../assets/landmarks/oldhouses/houses4.jpg';
import houses6 from '../../assets/landmarks/oldhouses/houses5.jpg';
import houses7 from '../../assets/landmarks/oldhouses/houses6.jpg';
import houses8 from '../../assets/landmarks/oldhouses/houses7.jpg';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";
import { AppHeaderBar } from "../../components/HeaderSection/AppHeaderBar";
import { ObjectDescriptionCard } from '../../components/UI/ObjectDescriptionCard';
import { ObjectDescription } from "../../components/ObjectDescriptionSection/ObjectDescription";
import { landmarks } from '../../components/mock-data/data';
import { Footer } from "../../components/Footer/Footer";
import { MapSection } from "../../components/ObjectMapSection/ObjectMap";
import { Button } from "@mui/material";
import { Breadcrumb } from "../../components/BreadCrumbSection/Breadcrumb";
import classes from '../../components/ObjectMapSection/ObjectMap.module.css';
import { LandmarksXtras } from '../../components/ObjectXtrasSection/LandmarksXtras';
import { NextObject } from '../../components/UI/NextObject';
import { PreviousObject } from '../../components/UI/PreviousObject';

const objectName = landmarks.slice(3, 4).map(landmarkName => landmarkName.name);
const objectDescription = landmarks.slice(3, 4).map(landmarkDesc => landmarkDesc.description);
const museumsXtras = landmarks.slice(3, 4);
const images = [houses1, houses2, houses3, houses4, houses5, houses6, houses7, houses8];
const backLink = <Link to='/landmarks'> <Button> <ArrowBackIcon/> </Button></Link>

const mapContent = 
<div className={classes.mapouter}>
    <div className={classes['gmap-canvas']}>
        <iframe className={classes['gmap-iframe']} width="100%" frameborder="0" src="https://maps.google.com/maps?width=800&amp;height=500&amp;hl=en&amp;q=42.555119,27.649629&amp;t=h&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" title='Object Map'></iframe>
    </div>
</div>

export const LandmarkHouses = () => {
  return (
    <>
        <ObjectDescriptionCard>
            <AppHeaderBar/>
            <Breadcrumb backLink={backLink}/>
            <ObjectDescription images={images} text={objectDescription} objectName={objectName}/>
            <LandmarksXtras landmarksExtras={museumsXtras}/>
            <Link to='/landmark-church'><PreviousObject/></Link>
            <Link to='/landmark-monument'><NextObject/></Link>
            <MapSection map={mapContent}/>
        </ObjectDescriptionCard>
        <Footer/>
    </>
  )
};
