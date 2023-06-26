import React from 'react';
import { news } from '../mock-data/news';
import { CustomCard } from '../UI/CustomCard';
import moment from 'moment';
import './News.css';

export const ReadNews = () => {
    let nextNews = moment().add(1, 'days').calendar();

  return (
    <CustomCard>
        <h2> Актуални новини от Поморие </h2>
        <p>Към момента има {news.length} новини в този раздел. {nextNews}</p>
        <div className='news-container'>
            {news.map((news) => {
                return (
                <div key={news.id}>
                <h3>{news.title}</h3>
                <div className='gradient-wrapper'>
                  <img src={news.image} alt={news.title}/>  
                </div>
                <p>Публикувана: {news.date.toLocaleString('bg-BG')}</p>
                <article>
                    {news.summary}
                </article>
                <div className='rule'></div>
                </div>) 
            })}
      </div>
    </CustomCard>
  )
}
