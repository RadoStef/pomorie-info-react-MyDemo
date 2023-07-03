import React from "react";
import coverImage from '../../assets/beaches/inzhstroi/inzhstroy-marked.jpg';
import image1 from '../../assets/beaches/inzhstroi/lahabana.jpg';
import image2 from '../../assets/beaches/inzhstroi/lahabana0.jpg';
import image3 from '../../assets/beaches/inzhstroi/lahabana1.jpg';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";
import { AppHeaderBar } from "../../components/HeaderSection/AppHeaderBar";
import { BeachesExtras } from "../../components/ObjectXtrasSection/BeachesXtras";
import { ObjectDescriptionCard } from '../../components/UI/ObjectDescriptionCard';
import { ObjectDescription } from "../../components/ObjectDescriptionSection/ObjectDescription";
import { beaches } from '../../components/mock-data/data';
import { Footer } from "../../components/Footer/Footer";
import { MapSection } from "../../components/ObjectMapSection/ObjectMap";
import { Breadcrumb } from "../../components/BreadCrumbSection/Breadcrumb";
import { NextObject } from "../../components/UI/NextObject";
import { PreviousObject } from "../../components/UI/PreviousObject";
import { Button } from "@mui/material";
import classes from '../../components/ObjectMapSection/ObjectMap.module.css';

const objectName = beaches.slice(3, 4).map(beachName => beachName.name);
const objectDescription = beaches.slice(3, 4).map(beachDesc => beachDesc.description);
const beachXtras = beaches.slice(3, 4);
const images = [coverImage, image1, image2, image3];
const backLink = <Link to='/beaches'> <Button> <ArrowBackIcon/> </Button></Link>

const mapContent = 
<div className={classes.mapouter}>
    <div className={classes['gmap-canvas']}>
        <iframe className={classes['gmap-iframe']} width="100%" frameborder="0" src="https://maps.google.com/maps?width=800&amp;height=500&amp;hl=en&amp;q=42.5605895,27.6451444&amp;t=h&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" title='Object Map'></iframe>
    </div>
</div>

export const BeachSopharma = () => {
    return (
        <>
        <ObjectDescriptionCard>
            <AppHeaderBar/>
            <Breadcrumb backLink={backLink}/>
            <ObjectDescription images={images} text={objectDescription} objectName={objectName}/>
            <BeachesExtras beachExtras={beachXtras}/>
            <Link to='/beach-pompata'><NextObject/></Link>
            <Link to='/beach-three'><PreviousObject/></Link>
            <MapSection map={mapContent}/>
        </ObjectDescriptionCard>
        <Footer/>
        </>
    );
};