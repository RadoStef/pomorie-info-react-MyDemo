import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RootLayout } from './pages/Root';
import { Museums } from './pages/Museums';
import './App.css';
import { Beaches } from './pages/Beaches';
import { Landmarks } from './pages/Landmarks';
import { Parking } from './pages/Parking';
import { Playgrounds } from './pages/Playgrounds';
import { Attractions } from './pages/Attractions';
import { Sport } from './pages/Sport';
import { Healthcare } from './pages/Healthcare';
import { Mug } from './pages/Mug';
import { WineAndCulture } from './pages/WineAndCulture';
import { Transport } from './pages/Transport';
import { Hotels } from './pages/Hotels';
import { Restaurants } from './pages/Restaurants';
import { PostDataPage } from './pages/PostDataPage';
import { GetDataPage } from './pages/GetDataPage';
import { TablePage } from './pages/TablePage';

const router = createBrowserRouter([
  {path: '/', element: <RootLayout/>},
  {path: 'post-data-page', element: <PostDataPage/>},
  {path: 'get-data-page', element: <GetDataPage/>},
  {path: 'table-page', element: <TablePage/>},
  {path: 'museums', element: <Museums/>},
  {path: 'landmarks', element: <Landmarks/>},
  {path: 'beaches', element: <Beaches/>},
  {path: 'parkings', element: <Parking/>},
  {path: 'playgrounds', element: <Playgrounds/>},
  {path: 'attractions', element: <Attractions/>},
  {path: 'sport', element: <Sport/>},
  {path: 'healthcare', element: <Healthcare/>},
  {path: 'mug', element: <Mug/>},
  {path: 'wineandculture', element: <WineAndCulture/>},
  {path: 'transport', element: <Transport/>},
  {path: 'hotels', element: <Hotels/>},
  {path: 'restaurants', element: <Restaurants/>},
]);

function App() {
  return  <RouterProvider router={router}/>
}
export default App;
