import React from 'react';
import { AppHeaderBar } from '../components/HeaderSection/AppHeaderBar';
import { CityObject } from '../components/wineandculture/CityObject';
import { ScrollToTopButton } from '../components/UI/ScrollToTopButton';
import { Breadcrumb } from '../components/BreadCrumbSection/Breadcrumb';
import { Footer } from '../components/Footer/Footer';

export const WineAndCulture = () => {
  return (
    <div>
      <AppHeaderBar/>
      <Breadcrumb location='/ Култура'/>
      <CityObject/>
      <Footer/>
      <ScrollToTopButton/>
    </div>
  )
};