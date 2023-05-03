import React from 'react';
import { AppHeaderBar } from '../components/HeaderSection/AppHeaderBar';
import { ScrollToTopButton } from '../components/UI/ScrollToTopButton';
import { Breadcrumb } from '../components/BreadCrumbSection/Breadcrumb';
import { ReadNews } from '../components/News/ReadNews';
import { PostNewNews } from '../components/News/PostNewNews';

export const NewsPage = () => {
  return (
    <div>
      <AppHeaderBar/>
      <Breadcrumb location='/ News'/>
      <ReadNews/>
      <PostNewNews/>
      <ScrollToTopButton/>
    </div>
  )
};