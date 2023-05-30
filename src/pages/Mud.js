import React from 'react';
// import { Link } from 'react-router-dom';
import { AppHeaderBar } from '../components/HeaderSection/AppHeaderBar';
import { CityObject } from '../components/mud/CityObject';
import { ScrollToTopButton } from '../components/UI/ScrollToTopButton';
import { Breadcrumb } from '../components/BreadCrumbSection/Breadcrumb';
import { Footer } from '../components/Footer/Footer';

export const Mud = () => {
  return (
    <div>
      <AppHeaderBar/>
      <Breadcrumb location='/ Калолечебници'/>
      <CityObject/>
      <Footer/>
      <ScrollToTopButton/>
    </div>
  )
};
