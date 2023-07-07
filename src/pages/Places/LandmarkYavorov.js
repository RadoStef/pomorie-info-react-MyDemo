import React, { useEffect } from 'react';
import yavorov1 from '../../assets/landmarks/yavorov/pametnikyavorov.jpg';
import yavorov2 from '../../assets/landmarks/yavorov/pametnikyavorov1.jpg';
import yavorov3 from '../../assets/landmarks/yavorov/pametnikyavorov2.jpg';
import yavorov4 from '../../assets/landmarks/yavorov/pametnikyavorov3.jpg';
import yavorov5 from '../../assets/landmarks/yavorov/pametnikyavorov4.jpg';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";
import { AppHeaderBar } from "../../components/HeaderSection/AppHeaderBar";
import { ObjectDescriptionCard } from '../../components/UI/ObjectDescriptionCard';
import { ObjectDescription } from "../../components/ObjectDescriptionSection/ObjectDescription";
import { landmarks, goToTop } from '../../components/mock-data/data';
import { Footer } from "../../components/Footer/Footer";
import { MapSection } from "../../components/ObjectMapSection/ObjectMap";
import { Button } from "@mui/material";
import { Breadcrumb } from "../../components/BreadCrumbSection/Breadcrumb";
import classes from '../../components/ObjectMapSection/ObjectMap.module.css';
import { LandmarksXtras } from '../../components/ObjectXtrasSection/LandmarksXtras';
import { NextObject } from '../../components/UI/NextObject';
import { PreviousObject } from '../../components/UI/PreviousObject';

const objectName = landmarks.slice(5, 6).map(landmarkName => landmarkName.name);
const objectDescription = landmarks.slice(5, 6).map(landmarkDesc => landmarkDesc.description);
const museumsXtras = landmarks.slice(5, 6);
const images = [yavorov1, yavorov2, yavorov3, yavorov4, yavorov5];
const backLink = <Link to='/landmarks'> <Button> <ArrowBackIcon/> </Button></Link>

const mapContent = 
<div className={classes.mapouter}>
    <div className={classes['gmap-canvas']}>
        <iframe className={classes['gmap-iframe']} width="100%" frameborder="0" src="https://maps.google.com/maps?width=800&amp;height=500&amp;hl=en&amp;q=42.5534757,27.6438273&amp;t=h&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" title='Object Map'></iframe>
    </div>
</div>

export const LandmarkYavorov = () => {
  useEffect(() => {
    goToTop();
  }, []);

  return (
    <>
        <ObjectDescriptionCard>
            <AppHeaderBar/>
            <Breadcrumb backLink={backLink}/>
            <ObjectDescription images={images} text={objectDescription} objectName={objectName}/>
            <LandmarksXtras landmarksExtras={museumsXtras}/>
            <Link to='/landmark-monument'><PreviousObject/></Link>
            <Link to='/landmark-boy'><NextObject/></Link>
            <MapSection map={mapContent}/>
        </ObjectDescriptionCard>
        <Footer/>
    </>
  )
};
