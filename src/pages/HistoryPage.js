import React from 'react';
import { AppHeaderBar } from '../components/HeaderSection/AppHeaderBar';
import { ScrollToTopButton } from '../components/UI/ScrollToTopButton';
import { Breadcrumb } from '../components/BreadCrumbSection/Breadcrumb';
import { History } from '../components/history/History';
import { DownloadBtn } from '../components/history/DownloadBtn';
import { Footer } from '../components/Footer/Footer';

export const HistoryPage = () => {
  return (
    <div>
      <AppHeaderBar/>
      <Breadcrumb location='/ History'/>
      <DownloadBtn/>
      <History/>
      <Footer/>
      <ScrollToTopButton/>
    </div>
  )
};