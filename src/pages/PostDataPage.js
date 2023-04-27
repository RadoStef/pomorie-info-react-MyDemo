import React from 'react';
import { AppHeaderBar } from '../components/HeaderSection/AppHeaderBar';
import { ScrollToTopButton } from '../components/UI/ScrollToTopButton';
import { Breadcrumb } from '../components/BreadCrumbSection/Breadcrumb';
import { PostData } from '../components/PostDataForm/PostData';

export const PostDataPage = () => {
  return (
    <div>
      <AppHeaderBar/>
      <Breadcrumb location='/ Post data to firebase'/>
      <PostData/>
      <ScrollToTopButton/>
    </div>
  )
};