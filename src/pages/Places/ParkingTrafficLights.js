import React from 'react';
import trafficLights1 from '../../assets/parkings/traffic/parking-svetofar1.jpg';
import trafficLights2 from '../../assets/parkings/traffic/parking-svetofar2.jpg';
import trafficLights3 from '../../assets/parkings/traffic/parking-svetofar3.jpg';
import trafficLights4 from '../../assets/parkings/traffic/parking-svetofar4.jpg';
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

const objectName = parkings.slice(5, 6).map(parkingName => parkingName.name);
const objectDescription = parkings.slice(5, 6).map(parkingDesc => parkingDesc.description);
const bufferLarge = parkings.slice(5, 6);
const images = [trafficLights1, trafficLights2, trafficLights3, trafficLights4];
const backLink = <Link to='/parkings'> <Button> <ArrowBackIcon/> </Button></Link>

const mapContent = 
<div className={classes.mapouter}>
    <div className={classes['gmap-canvas']}>
        <iframe className={classes['gmap-iframe']} width="100%" frameborder="0" src="https://maps.google.com/maps?width=800&amp;height=500&amp;hl=en&amp;q=42.5607082,27.6399235&amp;t=h&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" title='Object Map'></iframe>
    </div>
</div>


export const ParkingTrafficLights = () => {
  return (
    <>
        <ObjectDescriptionCard>
            <AppHeaderBar/>
            <Breadcrumb backLink={backLink}/>
            <ObjectDescription images={images} text={objectDescription} objectName={objectName}/>
            <ParkingsXtras parkingExtras={bufferLarge}/>
            <Link to='/parking-municipality'><PreviousObject/></Link>
            <Link to='/parking-perla'><NextObject/></Link>
            <MapSection map={mapContent}/>
        </ObjectDescriptionCard>
        <Footer/>
    </>
  )
};
