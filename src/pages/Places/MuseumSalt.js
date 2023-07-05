import React from 'react';
import salt1 from '../../assets/museums/salt/salt.jpg';
import salt2 from '../../assets/museums/salt/salt1.jpg';
import salt3 from '../../assets/museums/salt/salt2.jpg';
import salt4 from '../../assets/museums/salt/salt3.jpg';
import salt5 from '../../assets/museums/salt/salt4.jpg';
import salt6 from '../../assets/museums/salt/salt5.jpg';
import salt7 from '../../assets/museums/salt/salt6.jpg';
import salt8 from '../../assets/museums/salt/salt7.jpg';
import salt9 from '../../assets/museums/salt/salt8.jpg';
import salt10 from '../../assets/museums/salt/salt9.jpg';
import salt11 from '../../assets/museums/salt/salt10.jpg';
import salt12 from '../../assets/museums/salt/salt11.jpg';
import salt13 from '../../assets/museums/salt/salt12.jpg';
import salt14 from '../../assets/museums/salt/salt13.jpg';
import salt15 from '../../assets/museums/salt/salt14.jpg';
import salt16 from '../../assets/museums/salt/salt15.jpg';


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

const objectName = museums.slice(1, 2).map(parkingName => parkingName.name);
const objectDescription = museums.slice(1, 2).map(parkingDesc => parkingDesc.description);
const museumsXtras = museums.slice(1, 2);
const images = [salt1, salt2, salt3, salt4, salt5, salt6, salt7, salt8, salt9, salt10, salt11, salt12, salt13, salt14, salt15, salt16];
const backLink = <Link to='/museums'> <Button> <ArrowBackIcon/> </Button></Link>

const mapContent = 
<div className={classes.mapouter}>
    <div className={classes['gmap-canvas']}>
        <iframe className={classes['gmap-iframe']} width="100%" frameborder="0" src="https://maps.google.com/maps?width=800&amp;height=500&amp;hl=en&amp;q=42.565443,27.632331&amp;t=h&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" title='Object Map'></iframe>
    </div>
</div>

export const MuseumSalt = () => {
  return (
    <>
        <ObjectDescriptionCard>
            <AppHeaderBar/>
            <Breadcrumb backLink={backLink}/>
            <ObjectDescription images={images} text={objectDescription} objectName={objectName}/>
            <MuseumsXtras museumsExtras={museumsXtras}/>
            <Link to='/museum-historical'><PreviousObject/></Link>
            <Link to='/museum-ornithology'><NextObject/></Link>
            <MapSection map={mapContent}/>
        </ObjectDescriptionCard>
        <Footer/>
    </>
  )
};
