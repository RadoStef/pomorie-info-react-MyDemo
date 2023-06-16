import React from "react";
import coverImage from '../../assets/beaches/pompata/pompata-marked.jpg';
import image1 from '../../assets/beaches/pompata/pompata.jpg';
import image2 from '../../assets/beaches/pompata/pompata1.jpg';
import image3 from '../../assets/beaches/pompata/pompata2.jpg';
import image4 from '../../assets/beaches/pompata/pompata3.jpg';
import image5 from '../../assets/beaches/pompata/pompata4.jpg';
import image6 from '../../assets/beaches/pompata/pompata5.jpg';
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

const beachName = `Плажове Помпата 1 и 2`;
const beachTwo = beaches.slice(5, 6);
const images = [coverImage, image1, image2, image3, image4, image5, image6];
const description = `Няма описание.`
const backLink = <Link to='/beaches'> <Button> <ArrowBackIcon/> </Button></Link>

const mapContent = 
<div className={classes.mapouter}>
    <div className={classes['gmap-canvas']}>
        <iframe className={classes['gmap-iframe']} width="100%" frameborder="0" src="https://maps.google.com/maps?width=800&amp;height=500&amp;hl=en&amp;q=42.5632253,27.6432353&amp;t=h&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" title='Object Map'></iframe>
    </div>
</div>

export const BeachPompata = () => {
    return (
        <>
        <ObjectDescriptionCard>
            <AppHeaderBar/>
            <Breadcrumb backLink={backLink}/>
            <ObjectDescription images={images} text={description} beachName={beachName}/>
            <BeachesExtras beachExtras={beachTwo}/>
            <Link to='/beach-atrium'><NextObject/></Link>
            <Link to='/beach-sopharma'><PreviousObject/></Link>
            <MapSection map={mapContent}/>
        </ObjectDescriptionCard>
        <Footer/>
        </>
    );
};