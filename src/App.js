import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RootLayout } from './pages/Root';
import { Museums } from './pages/Museums';
import { Beaches } from './pages/Beaches';
import { Landmarks } from './pages/Landmarks';
import { Parking } from './pages/Parking';
import { Playgrounds } from './pages/Playgrounds';
import { Attractions } from './pages/Attractions';
import { Sport } from './pages/Sport';
import { Healthcare } from './pages/Healthcare';
import { Mud } from './pages/Mud';
import { WineAndCulture } from './pages/WineAndCulture';
import { Transport } from './pages/Transport';
import { Hotels } from './pages/Hotels';
import { Restaurants } from './pages/Restaurants';
import { PostDataPage } from './pages/PostDataPage';
import { GetDataPage } from './pages/GetDataPage';
import { TablePage } from './pages/TablePage';
import { NewsPage } from './pages/NewsPage';
import { HistoryPage } from './pages/HistoryPage';
import { HotelListPage } from './pages/HotelListPage';
import './App.css';
import { BeachOne } from './pages/Places/BeachOne';
import { BeachTwo } from './pages/Places/BeachTwo';
import { BeachAtrium } from './pages/Places/BeachAtrium';
import { BeachCentral } from './pages/Places/BeachCentral';
import { BeachSopharma } from './pages/Places/BeachSopharma';
import { BeachPompata } from './pages/Places/BeachPompata';
import { BeachThree } from './pages/Places/BeachThree';

const router = createBrowserRouter([
  {path: '/', element: <RootLayout/>},
  {path: 'post-data-page', element: <PostDataPage/>},
  {path: 'get-data-page', element: <GetDataPage/>},
  {path: 'table-page', element: <TablePage/>},
  {path: 'history-page', element: <HistoryPage/>},
  {path: 'hotel-list-page', element: <HotelListPage/>},
  {path: 'news-page', element: <NewsPage/>},
  {path: 'museums', element: <Museums/>},
  {path: 'landmarks', element: <Landmarks/>},
  {path: 'beaches', element: <Beaches/>},
  {path: 'parkings', element: <Parking/>},
  {path: 'playgrounds', element: <Playgrounds/>},
  {path: 'attractions', element: <Attractions/>},
  {path: 'sport', element: <Sport/>},
  {path: 'healthcare', element: <Healthcare/>},
  {path: 'mud', element: <Mud/>},
  {path: 'wineandculture', element: <WineAndCulture/>},
  {path: 'transport', element: <Transport/>},
  {path: 'hotels', element: <Hotels/>},
  {path: 'restaurants', element: <Restaurants/>},
  {path: 'beach-one', element: <BeachOne/>},
  {path: 'beach-two', element: <BeachTwo/>},
  {path: 'beach-atrium', element: <BeachAtrium/>},
  {path: 'beach-central', element: <BeachCentral/>},
  {path: 'beach-sopharma', element: <BeachSopharma/>},
  {path: 'beach-pompata', element: <BeachPompata/>},
  {path: 'beach-three', element: <BeachThree/>},
]);

function App() {
  return  <RouterProvider router={router}/>
}
export default App;
