import React from 'react';
import { AppHeaderBar } from '../components/HeaderSection/AppHeaderBar';
import { ScrollToTopButton } from '../components/UI/ScrollToTopButton';
import { Breadcrumb } from '../components/BreadCrumbSection/Breadcrumb';
import { GetData } from '../components/GetData/GetData';

export const GetDataPage = () => {
  return (
    <div>
      <AppHeaderBar/>
      <Breadcrumb location='/ Get data from Firebase'/>
      <GetData/>
      <ScrollToTopButton/>
    </div>
  )
};