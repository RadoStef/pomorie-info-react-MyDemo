import React from 'react';
import gallery1 from '../../assets/museums/gallery/gallery.jpg';
import gallery2 from '../../assets/museums/gallery/gallery1.jpg';
import gallery3 from '../../assets/museums/gallery/gallery2.jpg';
import gallery4 from '../../assets/museums/gallery/gallery3.jpg';
import gallery5 from '../../assets/museums/gallery/gallery4.jpg';
import gallery6 from '../../assets/museums/gallery/gallery5.jpg';
import gallery7 from '../../assets/museums/gallery/gallery6.jpg';

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
import { PreviousObject } from '../../components/UI/PreviousObject';
import { MuseumsXtras } from '../../components/ObjectXtrasSection/MuseumsXtras';

const objectName = museums.slice(4, 5).map(museumName => museumName.name);
const objectDescription = museums.slice(4, 5).map(museumDesc => museumDesc.description);
const museumsXtras = museums.slice(4, 5);
const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7];
const backLink = <Link to='/museums'> <Button> <ArrowBackIcon/> </Button></Link>

const mapContent = 
<div className={classes.mapouter}>
    <div className={classes['gmap-canvas']}>
        <iframe className={classes['gmap-iframe']} width="100%" frameborder="0" src="https://maps.google.com/maps?width=800&amp;height=500&amp;hl=en&amp;q=42.556080,27.640211&amp;t=h&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" title='Object Map'></iframe>
    </div>
</div>

export const MuseumGallery = () => {
  return (
    <>
        <ObjectDescriptionCard>
            <AppHeaderBar/>
            <Breadcrumb backLink={backLink}/>
            <ObjectDescription images={images} text={objectDescription} objectName={objectName}/>
            <MuseumsXtras museumsExtras={museumsXtras}/>
            <Link to='/museum-ornithology'><PreviousObject/></Link>
            <MapSection map={mapContent}/>
        </ObjectDescriptionCard>
        <Footer/>
    </>
  )
};
