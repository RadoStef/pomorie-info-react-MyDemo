import React from 'react'
import { AppHeaderBar } from '../components/HeaderSection/AppHeaderBar';
import { CityObject } from '../components/hotels/CityObject';
import { ScrollToTopButton } from '../components/UI/ScrollToTopButton';
import { Breadcrumb } from '../components/BreadCrumbSection/Breadcrumb';
import { Footer } from '../components/Footer/Footer';

export const Hotels = () => {
  return (
    <div>
      <AppHeaderBar/>
      <Breadcrumb location='/ Хотели'/>
      <CityObject/>
      <Footer/>
      <ScrollToTopButton/>
    </div>
  )
};
