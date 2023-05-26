import React from 'react';
import { AppHeaderBar } from '../components/HeaderSection/AppHeaderBar';
import { CityObject } from '../components/beaches/CityObject';
import { ScrollToTopButton } from '../components/UI/ScrollToTopButton';
import { Breadcrumb } from '../components/BreadCrumbSection/Breadcrumb';
import { Footer } from '../components/Footer/Footer';

export const Beaches = () => {
  return (
    <div>
      <AppHeaderBar/>
      <Breadcrumb location='/ Плажове'/>
      <CityObject/>
      <Footer/>
      <ScrollToTopButton/>
    </div>
  )
};
