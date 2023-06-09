import React, { useEffect } from 'react';
import grandSmall1 from '../../assets/parkings/atriumSmall/parking-atrium1.jpg';
import grandSmall2 from '../../assets/parkings/atriumSmall/parking-atrium2.jpg';
import grandSmall3 from '../../assets/parkings/atriumSmall/parking-atrium3.jpg';


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
import { PreviousObject } from '../../components/UI/PreviousObject';
import { NextObject } from '../../components/UI/NextObject';

const objectName = parkings.slice(13, 14).map(parkingName => parkingName.name);
const objectDescription = parkings.slice(13, 14).map(parkingDesc => parkingDesc.description);
const parkingXtras = parkings.slice(13, 14);
const images = [grandSmall1, grandSmall2, grandSmall3];
const backLink = <Link to='/parkings'> <Button> <ArrowBackIcon/> </Button></Link>

const mapContent = 
<div className={classes.mapouter}>
    <div className={classes['gmap-canvas']}>
        <iframe className={classes['gmap-iframe']} width="100%" frameborder="0" src="https://maps.google.com/maps?width=800&amp;height=500&amp;hl=en&amp;q=42.565690,27.638451&amp;t=h&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" title='Object Map'></iframe>
    </div>
</div>


export const ParkingGrandSmall = () => {
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
            <Link to='/parking-grand-large'><PreviousObject/></Link>
            <Link to='/parking-sopharma'><NextObject/></Link>
            <MapSection map={mapContent}/>
        </ObjectDescriptionCard>
        <Footer/>
    </>
  )
};
