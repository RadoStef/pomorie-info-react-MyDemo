import React from 'react';
import classes from './ObjectDescriptionCard.module.css';

export const ObjectDescriptionCard = (props) => {
    return (
        <div className={classes['card-wrapper']}>
            {props.children}
        </div>
    )
}