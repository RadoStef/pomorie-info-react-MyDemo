import React, { useEffect } from 'react';
import boy1 from '../../assets/landmarks/momcheto/momcheto.jpg';
import boy2 from '../../assets/landmarks/momcheto/momcheto1.jpg';
import boy3 from '../../assets/landmarks/momcheto/momcheto2.jpg';
import boy4 from '../../assets/landmarks/momcheto/momcheto3.jpg';
import boy5 from '../../assets/landmarks/momcheto/momcheto4.jpg';
import boy6 from '../../assets/landmarks/momcheto/momcheto5.jpg';

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

const objectName = landmarks.slice(6, 7).map(landmarkName => landmarkName.name);
const objectDescription = landmarks.slice(6, 7).map(landmarkDesc => landmarkDesc.description);
const museumsXtras = landmarks.slice(6, 7);
const images = [boy1, boy2, boy3, boy4, boy5, boy6];
const backLink = <Link to='/landmarks'> <Button> <ArrowBackIcon/> </Button></Link>

const mapContent = 
<div className={classes.mapouter}>
    <div className={classes['gmap-canvas']}>
        <iframe className={classes['gmap-iframe']} width="100%" frameborder="0" src="https://maps.google.com/maps?width=800&amp;height=500&amp;hl=en&amp;q=42.555931,27.640049&amp;t=h&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" title='Object Map'></iframe>
    </div>
</div>

export const LandmarkBoy = () => {
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
            <Link to='/landmark-yavorov'><PreviousObject/></Link>
            <Link to='/landmark-harbor'><NextObject/></Link>
            <MapSection map={mapContent}/>
        </ObjectDescriptionCard>
        <Footer/>
    </>
  )
};
