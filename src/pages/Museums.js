import React from 'react'
import { AppHeaderBar } from '../components/HeaderSection/AppHeaderBar';
import { CityObject } from '../components/museums/CityObject';
import { ScrollToTopButton } from '../components/UI/ScrollToTopButton';
import { Breadcrumb } from '../components/BreadCrumbSection/Breadcrumb';
import { Footer } from '../components/Footer/Footer';

export const Museums = () => {
  return (
    <div>
      <AppHeaderBar/>
      <Breadcrumb location='/ Музеи'/>
      <CityObject/>
      <Footer/>
      <ScrollToTopButton/>
    </div>
  )
};
