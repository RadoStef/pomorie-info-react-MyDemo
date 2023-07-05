import React from 'react';
import monument1 from '../../assets//landmarks/monumentsaintgeorge/saintgeorge.jpg';
import monument2 from '../../assets//landmarks/monumentsaintgeorge/saintgeorge1.jpg';
import monument3 from '../../assets//landmarks/monumentsaintgeorge/saintgeorge2.jpg';
import monument4 from '../../assets//landmarks/monumentsaintgeorge/saintgeorge3.jpg';

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

const objectName = landmarks.slice(4, 5).map(landmarkName => landmarkName.name);
const objectDescription = landmarks.slice(4, 5).map(landmarkDesc => landmarkDesc.description);
const museumsXtras = landmarks.slice(4, 5);
const images = [monument1, monument2, monument3, monument4];
const backLink = <Link to='/landmarks'> <Button> <ArrowBackIcon/> </Button></Link>

const mapContent = 
<div className={classes.mapouter}>
    <div className={classes['gmap-canvas']}>
        <iframe className={classes['gmap-iframe']} width="100%" frameborder="0" src="https://maps.google.com/maps?width=800&amp;height=500&amp;hl=en&amp;q=42.5672977,27.6190287&amp;t=h&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" title='Object Map'></iframe>
    </div>
</div>

export const LandmarkMonument = () => {
  return (
    <>
        <ObjectDescriptionCard>
            <AppHeaderBar/>
            <Breadcrumb backLink={backLink}/>
            <ObjectDescription images={images} text={objectDescription} objectName={objectName}/>
            <LandmarksXtras landmarksExtras={museumsXtras}/>
            <Link to='/landmark-houses'><PreviousObject/></Link>
            <Link to='/landmark-yavorov'><NextObject/></Link>
            <MapSection map={mapContent}/>
        </ObjectDescriptionCard>
        <Footer/>
    </>
  )
};
