import React from 'react';
import thomb1 from '../../assets/museums/mogila/mogila.jpg';
import thomb2 from '../../assets/museums/mogila/mogila1.jpg';
import thomb3 from '../../assets/museums/mogila/mogila2.jpg';
import thomb4 from '../../assets/museums/mogila/mogila3.jpg';
import thomb5 from '../../assets/museums/mogila/mogila4.jpg';
import thomb6 from '../../assets/museums/mogila/mogila5.jpg';
import thomb7 from '../../assets/museums/mogila/mogila6.jpg';
import thomb8 from '../../assets/museums/mogila/mogila7.jpg';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";
import { AppHeaderBar } from "../../components/HeaderSection/AppHeaderBar";
import { ObjectDescriptionCard } from '../../components/UI/ObjectDescriptionCard';
import { ObjectDescription } from "../../components/ObjectDescriptionSection/ObjectDescription";
import { museums } from '../../components/mock-data/data';
import { Footer } from "../../components/Footer/Footer";
import { MapSection } from "../../components/ObjectMapSection/ObjectMap";
import { Button } from "@mui/material";
import { Breadcrumb } from "../../components/BreadCrumbSection/Breadcrumb";
import classes from '../../components/ObjectMapSection/ObjectMap.module.css';
import { NextObject } from "../../components/UI/NextObject";
import { PreviousObject } from '../../components/UI/PreviousObject';
import { MuseumsXtras } from '../../components/ObjectXtrasSection/MuseumsXtras';

const objectName = museums.slice(2, 3).map(parkingName => parkingName.name);
const objectDescription = museums.slice(2, 3).map(parkingDesc => parkingDesc.description);
const museumsXtras = museums.slice(2, 3);
const images = [thomb1, thomb2, thomb3, thomb4, thomb5, thomb6, thomb7, thomb8];
const backLink = <Link to='/museums'> <Button> <ArrowBackIcon/> </Button></Link>

const mapContent = 
<div className={classes.mapouter}>
    <div className={classes['gmap-canvas']}>
        <iframe className={classes['gmap-iframe']} width="100%" frameborder="0" src="https://maps.google.com/maps?width=800&amp;height=500&amp;hl=en&amp;q=42.567275,27.595807&amp;t=h&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" title='Object Map'></iframe>
    </div>
</div>

export const MuseumThomb = () => {
  return (
    <>
        <ObjectDescriptionCard>
            <AppHeaderBar/>
            <Breadcrumb backLink={backLink}/>
            <ObjectDescription images={images} text={objectDescription} objectName={objectName}/>
            <MuseumsXtras museumsExtras={museumsXtras}/>
            <Link to='/museum-salt'><PreviousObject/></Link>
            <Link to='/museum-ornithology'><NextObject/></Link>
            <MapSection map={mapContent}/>
        </ObjectDescriptionCard>
        <Footer/>
    </>
  )
};
