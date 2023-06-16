import React from "react";
import coverImage from '../../assets/beaches/atrium/atrium-marked.jpg';
import image1 from '../../assets/beaches/atrium/atrium.jpg';
import image2 from '../../assets/beaches/atrium/atrium1.jpg';
import image3 from '../../assets/beaches/atrium/atrium2.jpg';
import image4 from '../../assets/beaches/atrium/atrium3.jpg';
import image5 from '../../assets/beaches/atrium/atrium4.jpg';
import image6 from '../../assets/beaches/atrium/atrium5.jpg';
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

const beachName = `Плаж Атриум`;
const beachTwo = beaches.slice(2, 3);
const images = [coverImage, image1, image2, image3, image4, image5, image6];
const description = `Lorem ipsum dolor sit amet,`
const backLink = <Link to='/beaches'> <Button> <ArrowBackIcon/> </Button></Link>

const mapContent = 
<div className={classes.mapouter}>
    <div className={classes['gmap-canvas']}>
        <iframe className={classes['gmap-iframe']} width="100%" src="https://maps.google.com/maps?width=800&amp;height=500&amp;hl=en&amp;q=42.5655771,27.6412504&amp;t=h&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" title='Object Map'></iframe>
    </div>
</div>

export const BeachAtrium = () => {
    return (
        <>
        <ObjectDescriptionCard>
            <AppHeaderBar/>
            <Breadcrumb backLink={backLink}/>
            <ObjectDescription images={images} text={description} beachName={beachName}/>
            <BeachesExtras beachExtras={beachTwo}/>
            <Link to='/beach-central'><NextObject/></Link>
            <Link to='/beach-pompata'><PreviousObject/></Link>
            <MapSection map={mapContent}/>
        </ObjectDescriptionCard>
        <Footer/>
        </>
    );
};