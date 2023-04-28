import React from 'react';
import { AppHeaderBar } from '../components/HeaderSection/AppHeaderBar';
import { ScrollToTopButton } from '../components/UI/ScrollToTopButton';
import { Breadcrumb } from '../components/BreadCrumbSection/Breadcrumb';
import { Table } from '../components/Table/Table';


export const TablePage = () => {
  return (
    <div>
      <AppHeaderBar/>
      <Breadcrumb location='/ Tables'/>
      <Table/>
      <ScrollToTopButton/>
    </div>
  )
};