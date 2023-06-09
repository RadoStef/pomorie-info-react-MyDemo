import React from 'react';
import { AppHeaderBar } from '../components/HeaderSection/AppHeaderBar';
import { ScrollToTopButton } from '../components/UI/ScrollToTopButton';
import { Breadcrumb } from '../components/BreadCrumbSection/Breadcrumb';
import HotelList from '../components/HotelList/HotelList';
import { Footer } from '../components/Footer/Footer';

export const HotelListPage = () => {
  return (
    <div>
      <AppHeaderBar/>
      <Breadcrumb location='/ List of hotels in Pomorie'/>
      <HotelList/>
      <Footer/>
      <ScrollToTopButton/>
    </div>
  )
};