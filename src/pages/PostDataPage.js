import React from 'react';
import { AppHeaderBar } from '../components/HeaderSection/AppHeaderBar';
import { ScrollToTopButton } from '../components/UI/ScrollToTopButton';
import { Breadcrumb } from '../components/BreadCrumbSection/Breadcrumb';
import { PostData } from '../components/PostDataForm/PostData';
import { Footer } from '../components/Footer/Footer';

export const PostDataPage = () => {
  return (
    <div>
      <AppHeaderBar/>
      <Breadcrumb location='/ Post data to Firebase'/>
      <PostData/>
      <Footer/>
      <ScrollToTopButton/>
    </div>
  )
};