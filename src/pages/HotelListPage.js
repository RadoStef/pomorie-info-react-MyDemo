import React from 'react';
import { AppHeaderBar } from '../components/HeaderSection/AppHeaderBar';
import { ScrollToTopButton } from '../components/UI/ScrollToTopButton';
import { Breadcrumb } from '../components/BreadCrumbSection/Breadcrumb';
import HotelList from '../components/HotelList/HotelList';

export const HotelListPage = () => {
  return (
    <div>
      <AppHeaderBar/>
      <Breadcrumb location='/ List of hotels in Pomorie'/>
      <HotelList/>
      <ScrollToTopButton/>
    </div>
  )
};