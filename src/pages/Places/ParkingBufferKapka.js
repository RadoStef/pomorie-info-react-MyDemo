import React from 'react';
import bufferKapka1 from '../../assets/parkings/bufferKapka/bufferKapkaIntro.jpg';
import bufferKapka2 from '../../assets/parkings/bufferKapka/bufferKapka1.jpg';
import bufferKapka3 from '../../assets/parkings/bufferKapka/bufferKapka2.jpg';
import bufferKapka4 from '../../assets/parkings/bufferKapka/bufferKapka3.jpg';

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

const objectName = parkings.slice(1, 2).map(parkingName => parkingName.name);
const objectDescription = parkings.slice(1, 2).map(parkingDesc => parkingDesc.description);
const bufferLarge = parkings.slice(1, 2);
const images = [bufferKapka1, bufferKapka2, bufferKapka3, bufferKapka4];
const backLink = <Link to='/parkings'> <Button> <ArrowBackIcon/> </Button></Link>

const mapContent = 
<div className={classes.mapouter}>
    <div className={classes['gmap-canvas']}>
        <iframe className={classes['gmap-iframe']} width="100%" frameborder="0" src="https://maps.google.com/maps?width=800&amp;height=500&amp;hl=en&amp;q=42.561595,27.6402203&amp;t=k&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" title='Object Map'></iframe>
    </div>
</div>

export const ParkingBufferKapka = () => {
  return (
    <>
        <ObjectDescriptionCard>
            <AppHeaderBar/>
            <Breadcrumb backLink={backLink}/>
            <ObjectDescription images={images} text={objectDescription} objectName={objectName}/>
            <ParkingsXtras parkingExtras={bufferLarge}/>
            <Link to='/buffer-large'><PreviousObject/></Link>
            <Link to='/buffer-rose'><NextObject/></Link>
            <MapSection map={mapContent}/>
        </ObjectDescriptionCard>
        <Footer/>
    </>
  )
};



