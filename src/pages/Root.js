import React, {useState, useEffect} from 'react';
import { AppHeaderBar } from '../components/HeaderSection/AppHeaderBar';
import { WelcomeSection } from '../components/WelcomeSection/WelcomeSection';
import { ScrollToTopButton } from '../components/UI/ScrollToTopButton';
import { WeatherInfo } from '../components/WeatherSection/WeatherInfo';
import { Categories } from '../components/CategoriesSection/Categories';
import { Loading } from '../components/Loading/Loading';
import { FAQ } from '../components/QuestionSection/FAQ';
import { ImageListElement } from '../components/ImageLists/ImageListElement';
import { LightboxElement } from '../components/LightBoxSection/LightboxElement';
import { Footer } from '../components/Footer/Footer';

export const RootLayout = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => setIsLoading(false), 1000);
    }, []);

  return (
    <>
      {isLoading 
        ? <Loading/> 
        : <div className="App">
            <AppHeaderBar />
            <WeatherInfo/>
            <WelcomeSection/>
            <Categories/>
            <ImageListElement/>
            <FAQ/>
            <LightboxElement/>
            <Footer/>
            <ScrollToTopButton/>
        </div>}
    </>
  )
};
