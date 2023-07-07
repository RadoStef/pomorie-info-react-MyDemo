import React, { useEffect } from "react";
import coverImage from '../../assets/beaches/2/vtori-mark.jpg';
import image1 from '../../assets/beaches/2/vtori.jpg';
import image2 from '../../assets/beaches/2/vtori0.jpg';
import image3 from '../../assets/beaches/2/vtori1.jpg';
import image4 from '../../assets/beaches/2/vtori2.jpg';
import image5 from '../../assets/beaches/2/vtori3.jpg';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";
import { AppHeaderBar } from "../../components/HeaderSection/AppHeaderBar";
import { BeachesExtras } from "../../components/ObjectXtrasSection/BeachesXtras";
import { ObjectDescriptionCard } from '../../components/UI/ObjectDescriptionCard';
import { ObjectDescription } from "../../components/ObjectDescriptionSection/ObjectDescription";
import { beaches, goToTop } from '../../components/mock-data/data';
import { Footer } from "../../components/Footer/Footer";
import { MapSection } from "../../components/ObjectMapSection/ObjectMap";
import { Breadcrumb } from "../../components/BreadCrumbSection/Breadcrumb";
import { Button } from "@mui/material";
import classes from '../../components/ObjectMapSection/ObjectMap.module.css';
import { NextObject } from "../../components/UI/NextObject";
import { PreviousObject } from "../../components/UI/PreviousObject";

const objectName = beaches.slice(1, 2).map(beachName => beachName.name);
const objectDescription = beaches.slice(1, 2).map(beachDesc => beachDesc.description);
const beachXtras = beaches.slice(1, 2);
const images = [coverImage, image1, image2, image3, image4, image5];
const backLink = <Link to='/beaches'> <Button> <ArrowBackIcon/> </Button></Link>

const mapContent = 
<div className={classes.mapouter}>
    <div className={classes['gmap-canvas']}>
        <iframe className={classes['gmap-iframe']} width="100%" frameborder="0" src="https://maps.google.com/maps?width=800&amp;height=500&amp;hl=en&amp;q=42.5575356,27.6479714&amp;t=h&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" title='Object Map'></iframe>
    </div>
</div>

export const BeachTwo = () => {
    useEffect(() => {
        goToTop();
    }, []);
    
    return (
        <>
        <ObjectDescriptionCard>
            <AppHeaderBar/>
            <Breadcrumb backLink={backLink}/>
            <ObjectDescription images={images} text={objectDescription} objectName={objectName}/>
            <BeachesExtras beachExtras={beachXtras}/>
            <Link to='/beach-three'><NextObject/></Link>
            <Link to='/beach-one'><PreviousObject/></Link>
            <MapSection map={mapContent}/>
        </ObjectDescriptionCard>
        <Footer/>
        </>
    );
};
