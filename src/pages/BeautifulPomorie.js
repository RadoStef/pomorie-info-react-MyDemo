import React from 'react';
import { AppHeaderBar } from '../components/HeaderSection/AppHeaderBar';
import { Breadcrumb } from '../components/BreadCrumbSection/Breadcrumb';
import { CityObject } from '../components/photographers/CityObject';
import { PhotographerCard } from '../components/photographers/PhotographerCard';
import { ScrollToTopButton } from '../components/UI/ScrollToTopButton';

export const BeautifulPomorie = () => {
  return (
    <div>
      <AppHeaderBar/>
      <Breadcrumb location='/ Красотата на Поморие'/>
      <CityObject/>
      <PhotographerCard/>
      <ScrollToTopButton/>
    </div>
  )
};
