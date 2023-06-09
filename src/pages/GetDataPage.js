import React from 'react';
import { AppHeaderBar } from '../components/HeaderSection/AppHeaderBar';
import { ScrollToTopButton } from '../components/UI/ScrollToTopButton';
import { Breadcrumb } from '../components/BreadCrumbSection/Breadcrumb';
import { GetData } from '../components/GetData/GetData';
import { Footer } from '../components/Footer/Footer';

export const GetDataPage = () => {
  return (
    <div>
      <AppHeaderBar/>
      <Breadcrumb location='/ Get data from Firebase'/>
      <GetData/>
      <Footer/>
      <ScrollToTopButton/>
    </div>
  )
};