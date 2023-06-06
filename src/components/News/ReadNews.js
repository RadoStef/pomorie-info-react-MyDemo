import React from 'react';
import { news } from '../mock-data/news';
import { CustomCard } from '../UI/CustomCard';
import moment from 'moment';
import './News.css';



export const ReadNews = () => {
    let nextNews = moment().add(1, 'days').calendar();

  return (
    <CustomCard>
        <h2> Breaking NEWS, working with date and time </h2>
        <p>There are {news.length} NEWS to read here. Next NEWS expexted {nextNews}</p>
        <div className='news-container'>
            {news.map((news) => {
                return (
                <div key={news.id}>
                <h3>{news.title}</h3>
                <div className='gradient-wrapper'>
                  <img src={news.image} alt={news.title}/>  
                </div>
                <p>Published: {news.date}</p>
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
