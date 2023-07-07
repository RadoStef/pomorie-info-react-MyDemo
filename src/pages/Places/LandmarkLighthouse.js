import React, { useEffect } from 'react';
import lighthouse1 from '../../assets/landmarks/lighthouse/lighthouse.jpg';
import lighthouse2 from '../../assets/landmarks/lighthouse/lighthouse1.jpg';
import lighthouse3 from '../../assets/landmarks/lighthouse/lighthouse2.jpg';
import lighthouse4 from '../../assets/landmarks/lighthouse/lighthouse3.jpg';
import lighthouse5 from '../../assets/landmarks/lighthouse/lighthouse4.jpg';

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
import { PreviousObject } from '../../components/UI/PreviousObject';

const objectName = landmarks.slice(8, 9).map(landmarkName => landmarkName.name);
const objectDescription = landmarks.slice(8, 9).map(landmarkDesc => landmarkDesc.description);
const museumsXtras = landmarks.slice(8, 9);
const images = [lighthouse1, lighthouse2, lighthouse3, lighthouse4, lighthouse5];
const backLink = <Link to='/landmarks'> <Button> <ArrowBackIcon/> </Button></Link>

const mapContent = 
<div className={classes.mapouter}>
    <div className={classes['gmap-canvas']}>
        <iframe className={classes['gmap-iframe']} width="100%" frameborder="0" src="https://maps.google.com/maps?width=800&amp;height=500&amp;hl=en&amp;q=42.550751,27.661329&amp;t=h&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" title='Object Map'></iframe>
    </div>
</div>

export const LandmarkLighthouse = () => {
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
            <Link to='/landmark-harbor'><PreviousObject/></Link>
            <MapSection map={mapContent}/>
        </ObjectDescriptionCard>
        <Footer/>
    </>
  )
};
