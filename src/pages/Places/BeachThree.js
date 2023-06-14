import React from "react";
import coverImage from '../../assets/beaches/sunnybay/sunny-bay-marked.jpg';
import image1 from '../../assets/beaches/sunnybay/sunnybay0.jpg';
import image2 from '../../assets/beaches/sunnybay/sunnybay1.jpg';
import image3 from '../../assets/beaches/sunnybay/sunnybay2.jpg';
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
import { Button } from "@mui/material";
import classes from '../../components/ObjectMapSection/ObjectMap.module.css';

const beachName = `Плаж трети, пред хотел Съни Бей`;
const beachTwo = beaches.slice(6, 7);
const images = [coverImage, image1, image2, image3];
const description = `Няма описание.`
const backLink = <Link to='/beaches'> <Button> <ArrowBackIcon/> </Button></Link>

const mapContent = 
<div className={classes.mapouter}>
    <div className={classes['gmap-canvas']}>
        <iframe className={classes['gmap-iframe']} width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=800&amp;height=500&amp;hl=en&amp;q=42.5595062,27.6458568&amp;t=h&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" title='Object Map'></iframe>
    </div>
</div>

export const BeachThree = () => {
    return (
        <>
        <ObjectDescriptionCard>
            <AppHeaderBar/>
            <Breadcrumb backLink={backLink}/>
            <ObjectDescription images={images} text={description} beachName={beachName}/>
            <BeachesExtras beachExtras={beachTwo}/>
            <MapSection map={mapContent}/>
        </ObjectDescriptionCard>
        <Footer/>
        </>
    );
};