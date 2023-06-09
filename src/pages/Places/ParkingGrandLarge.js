import React, { useEffect } from 'react';
import grandLarge1 from '../../assets/parkings/atriumLarge/atriumLargeNew1.jpg';
import grandLarge2 from '../../assets/parkings/atriumLarge/atriumLargeNew2.jpg';
import grandLarge3 from '../../assets/parkings/atriumLarge/atriumLargeNew3.jpg';
import grandLarge4 from '../../assets/parkings/atriumLarge/atriumLargeEntrance.jpg';
import grandLarge5 from '../../assets/parkings/atriumLarge/atriumLargeEntrance1.jpg';

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
import { PreviousObject } from '../../components/UI/PreviousObject';

const objectName = parkings.slice(12, 13).map(parkingName => parkingName.name);
const objectDescription = parkings.slice(12, 13).map(parkingDesc => parkingDesc.description);
const parkingXtras = parkings.slice(12, 13);
const images = [grandLarge4, grandLarge5, grandLarge1, grandLarge2, grandLarge3];
const backLink = <Link to='/parkings'> <Button> <ArrowBackIcon/> </Button></Link>

const mapContent = 
<div className={classes.mapouter}>
    <div className={classes['gmap-canvas']}>
        <iframe className={classes['gmap-iframe']} width="100%" frameborder="0" src="https://maps.google.com/maps?width=800&amp;height=500&amp;hl=en&amp;q=42.566720,27.638354&amp;t=h&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" title='Object Map'></iframe>
    </div>
</div>


export const ParkingGrandLarge = () => {
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
            <Link to='/parking-tuthon'><PreviousObject/></Link>
            <Link to='/parking-grand-small'><NextObject/></Link>
            <MapSection map={mapContent}/>
        </ObjectDescriptionCard>
        <Footer/>
    </>
  )
};
