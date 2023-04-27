import React from 'react';
import { AppHeaderBar } from '../components/HeaderSection/AppHeaderBar';
import { CityObject } from '../components/parkings/CityObject';
import { ScrollToTopButton } from '../components/UI/ScrollToTopButton';
import { Breadcrumb } from '../components/BreadCrumbSection/Breadcrumb';

export const Parking = () => {
  return (
    <div>
      <AppHeaderBar/>
      <Breadcrumb location='/ Паркинги'/>
      <CityObject/>
      <ScrollToTopButton/>
    </div>
  )
};
