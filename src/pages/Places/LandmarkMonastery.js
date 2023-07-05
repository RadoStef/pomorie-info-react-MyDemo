import React from 'react';
import monastery1 from '../../assets/landmarks/monastery/monastery.jpg';
import monastery2 from '../../assets/landmarks/monastery/monastery1.jpg';
import monastery3 from '../../assets/landmarks/monastery/monastery2.jpg';
import monastery4 from '../../assets/landmarks/monastery/monastery3.jpg';
import monastery5 from '../../assets/landmarks/monastery/monastery4.jpg';
import monastery6 from '../../assets/landmarks/monastery/monastery5.jpg';
import monastery7 from '../../assets/landmarks/monastery/monastery6.jpg';
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

const objectName = landmarks.slice(0, 1).map(landmarkName => landmarkName.name);
const objectDescription = landmarks.slice(0, 1).map(landmarkDesc => landmarkDesc.description);
const museumsXtras = landmarks.slice(0, 1);
const images = [monastery1, monastery2, monastery3, monastery4, monastery5, monastery6, monastery7];
const backLink = <Link to='/museums'> <Button> <ArrowBackIcon/> </Button></Link>

const mapContent = 
<div className={classes.mapouter}>
    <div className={classes['gmap-canvas']}>
        <iframe className={classes['gmap-iframe']} width="100%" frameborder="0" src="https://maps.google.com/maps?width=800&amp;height=500&amp;hl=en&amp;q=42.567372,27.618028&amp;t=h&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" title='Object Map'></iframe>
    </div>
</div>

export const LandmarkMonastery = () => {
  return (
    <>
        <ObjectDescriptionCard>
            <AppHeaderBar/>
            <Breadcrumb backLink={backLink}/>
            <ObjectDescription images={images} text={objectDescription} objectName={objectName}/>
            <LandmarksXtras landmarksExtras={museumsXtras}/>
            <Link to='/landmark-lake'><NextObject/></Link>
            <MapSection map={mapContent}/>
        </ObjectDescriptionCard>
        <Footer/>
    </>
  )
};
