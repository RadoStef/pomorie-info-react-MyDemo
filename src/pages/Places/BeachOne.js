import React from "react";
import coverImage from '../../assets/beaches/1/pyrvi-mark.jpg';
import image1 from '../../assets/beaches/1/pyrvi.jpg';
import image2 from '../../assets/beaches/1/pyrvi0.jpg';
import image3 from '../../assets/beaches/1/pyrvi1.jpg';
import image4 from '../../assets/beaches/1/pyrvi2.jpg';
import image5 from '../../assets/beaches/1/pyrvi3.jpg';
import image6 from '../../assets/beaches/1/pyrvi4.jpg';
import image7 from '../../assets/beaches/1/pyrvi5.jpg';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";
import { AppHeaderBar } from "../../components/HeaderSection/AppHeaderBar";
import { BeachesExtras } from "../../components/ObjectXtrasSection/BeachesXtras";
import { ObjectDescriptionCard } from '../../components/UI/ObjectDescriptionCard';
import { ObjectDescription } from "../../components/ObjectDescriptionSection/ObjectDescription";
import { beaches } from '../../components/mock-data/data';
import { Footer } from "../../components/Footer/Footer";
import { MapSection } from "../../components/ObjectMapSection/ObjectMap";
import { Button } from "@mui/material";
import { Breadcrumb } from "../../components/BreadCrumbSection/Breadcrumb";
import classes from '../../components/ObjectMapSection/ObjectMap.module.css';
import { NextObject } from "../../components/UI/NextObject";

const beachName = `Първи плаж`;
const description = `Няма описание.`
const beachOne = beaches.slice(0, 1);
const images = [coverImage, image1, image2, image3, image4, image5, image6, image7];
const backLink = <Link to='/beaches'> <Button> <ArrowBackIcon/> </Button></Link>

const mapContent = 
<div className={classes.mapouter}>
    <div className={classes['gmap-canvas']}>
        <iframe className={classes['gmap-iframe']} width="100%" frameborder="0" src="https://maps.google.com/maps?width=800&amp;height=500&amp;hl=en&amp;q=42.5563763,27.6495449&amp;t=h&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" title='Object Map'></iframe>
    </div>
</div>

export const BeachOne = () => {
    return (
        <>
        <ObjectDescriptionCard>
            <AppHeaderBar/>
            <Breadcrumb backLink={backLink}/>
            <ObjectDescription images={images} text={description} beachName={beachName}/>
            <BeachesExtras beachExtras={beachOne}/>
            <Link to='/beach-two'><NextObject/></Link>
            <MapSection map={mapContent}/>
        </ObjectDescriptionCard>
        <Footer/>
        </>
    );
};


