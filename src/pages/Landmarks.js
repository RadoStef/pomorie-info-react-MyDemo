import React from 'react';
import { AppHeaderBar } from '../components/HeaderSection/AppHeaderBar';
import { CityObject } from '../components/landmarks/CityObject';
import { ScrollToTopButton } from '../components/UI/ScrollToTopButton';
import { Breadcrumb } from '../components/BreadCrumbSection/Breadcrumb';

export const Landmarks = () => {
  return (
    <div>
      <AppHeaderBar/>
      <Breadcrumb location='/ Забележителности'/>
      <CityObject/>
      <ScrollToTopButton/>
    </div>
  )
};
