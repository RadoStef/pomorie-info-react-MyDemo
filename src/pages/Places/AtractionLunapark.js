import React, { useEffect } from 'react';
import lunapark1 from '../../assets/attractions/lunapark/lunapark-pomorie1.jpg';
import lunapark2 from '../../assets/attractions/lunapark/lunapark-pomorie2.jpg';
import lunapark3 from '../../assets/attractions/lunapark/lunapark-pomorie3.jpg';
import lunapark4 from '../../assets/attractions/lunapark/lunapark-pomorie4.jpg';
import lunapark5 from '../../assets/attractions/lunapark/lunapark-pomorie5.jpg';
import lunapark6 from '../../assets/attractions/lunapark/lunapark-pomorie6.jpg';
import lunapark7 from '../../assets/attractions/lunapark/lunapark-pomorie7.jpg';
import lunapark8 from '../../assets/attractions/lunapark/lunapark-pomorie8.jpg';


import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";
import { AppHeaderBar } from "../../components/HeaderSection/AppHeaderBar";
import { ObjectDescriptionCard } from '../../components/UI/ObjectDescriptionCard';
import { ObjectDescription } from "../../components/ObjectDescriptionSection/ObjectDescription";
import { attractions, goToTop } from '../../components/mock-data/data';
import { Footer } from "../../components/Footer/Footer";
import { MapSection } from "../../components/ObjectMapSection/ObjectMap";
import { Button } from "@mui/material";
import { Breadcrumb } from "../../components/BreadCrumbSection/Breadcrumb";
import classes from '../../components/ObjectMapSection/ObjectMap.module.css';
import { AttractionsXtras } from '../../components/ObjectXtrasSection/AttractionsXtras';
import { NextObject } from '../../components/UI/NextObject';
import { PreviousObject } from "../../components/UI/PreviousObject";

const objectName = attractions.slice(6, 7).map(attractionName => attractionName.name);
const objectDescription = attractions.slice(6, 7).map(attractionDesc => attractionDesc.description);
const attractionsXtras = attractions.slice(6, 7);
const images = [lunapark1, lunapark2, lunapark3, lunapark4, lunapark5, lunapark6, lunapark7, lunapark8];
const backLink = <Link to='/attractions'> <Button> <ArrowBackIcon/> </Button></Link>

const mapContent = 
<div className={classes.mapouter}>
    <div className={classes['gmap-canvas']}>
        <iframe className={classes['gmap-iframe']} width="100%" frameborder="0" src="https://maps.google.com/maps?width=800&amp;height=500&amp;hl=en&amp;q=42.556251,27.640584&amp;t=h&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" title='Object Map'></iframe>
    </div>
</div>

export const AttractionLunapark = () => {
  useEffect(() => {
    goToTop();
  }, []);
  return (
    <>
        <ObjectDescriptionCard>
            <AppHeaderBar/>
            <Breadcrumb backLink={backLink}/>
            <ObjectDescription images={images} text={objectDescription} objectName={objectName}/>
            <AttractionsXtras attractionsExtras={attractionsXtras}/>
            <Link to='/attraction-train'><PreviousObject/></Link>
            <Link to='/attraction-cinema'><NextObject/></Link>
            <MapSection map={mapContent}/>
        </ObjectDescriptionCard>
        <Footer/>
    </>
  )
};
