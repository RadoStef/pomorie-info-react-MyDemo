import React from 'react';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { Link } from 'react-router-dom';

export const BeachesRestaurantList = (props) => {

  return (
    <div>
      <RestaurantIcon />
      <span> Заведения на този плаж: </span>
      <ul>
        {props.beachNum.openRestaurants.map((restaurant) => (
          <li key={restaurant.name}>
            <Link to={restaurant.link}>{restaurant.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};