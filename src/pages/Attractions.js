import React from 'react';
import { AppHeaderBar } from '../components/HeaderSection/AppHeaderBar';
import { CityObject } from '../components/attractions/CityObject';
import { ScrollToTopButton } from '../components/UI/ScrollToTopButton';
import { Breadcrumb } from '../components/BreadCrumbSection/Breadcrumb';

export const Attractions = () => {
  return (
    <div>
      <AppHeaderBar/>
      <Breadcrumb location='/ Атракциони'/>
      <CityObject/>
      <ScrollToTopButton/>
    </div>
  )
};
