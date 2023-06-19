import React from 'react';
import { Link } from 'react-router-dom';
import classes from './BeachesRestaurantList.module.css';

export const BeachesRestaurantList = (props) => {

  return (
    <div className={classes['restaurants-list-wrapper']}>
      
      <h4> Заведения на този плаж: </h4>
        <div>
            <ul className={classes.list}>
                {props.beachNum.openRestaurants.map((restaurant) => (
                <li key={restaurant.name}>
                    <Link to={restaurant.link}>{restaurant.name}</Link>
                </li>
                ))}
            </ul>
        </div>
    </div>
  );
};