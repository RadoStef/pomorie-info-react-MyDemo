import React, { useEffect } from 'react';
import train1 from '../../assets/attractions/attraction-train/train-pomorie1.jpg';
import train2 from '../../assets/attractions/attraction-train/train-pomorie2.jpg';
import train3 from '../../assets/attractions/attraction-train/train-pomorie3.jpg';
import train4 from '../../assets/attractions/attraction-train/train-pomorie4.jpg';
import train5 from '../../assets/attractions/attraction-train/train-pomorie5.jpg';
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

const objectName = attractions.slice(5, 6).map(attractionName => attractionName.name);
const objectDescription = attractions.slice(5, 6).map(attractionDesc => attractionDesc.description);
const attractionsXtras = attractions.slice(5, 6);
const images = [train1, train2, train3, train4, train5];
const backLink = <Link to='/attractions'> <Button> <ArrowBackIcon/> </Button></Link>

const mapContent = 
<div className={classes.mapouter}>
    <div className={classes['gmap-canvas']}>
        <iframe className={classes['gmap-iframe']} width="100%" frameborder="0" src="https://maps.google.com/maps?width=800&amp;height=500&amp;hl=en&amp;q=42.555866,27.640160&amp;t=h&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" title='Object Map'></iframe>
    </div>
</div>

export const AttractionTrain = () => {
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
            <Link to='/attraction-aquapark'><PreviousObject/></Link>
            <Link to='/attraction-lunapark'><NextObject/></Link>
            <MapSection map={mapContent}/>
        </ObjectDescriptionCard>
        <Footer/>
    </>
  )
};
