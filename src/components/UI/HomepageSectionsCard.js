import React from 'react';
import classes from './HomepageSectionsCard.module.css';

export const HomepageSectionsCard = props => {
    return (
        <div className={classes['section-wrapper']}>
            {props.children}
        </div>
    )
};