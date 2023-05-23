import React from 'react';
import { AppHeaderBar } from '../components/HeaderSection/AppHeaderBar';
import { ScrollToTopButton } from '../components/UI/ScrollToTopButton';
import { Breadcrumb } from '../components/BreadCrumbSection/Breadcrumb';
import { History } from '../components/history/History';

export const HistoryPage = () => {
  return (
    <div>
      <AppHeaderBar/>
      <Breadcrumb location='/ History'/>
      <History/>
      <ScrollToTopButton/>
    </div>
  )
};