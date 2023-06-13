import React from "react";
import classes from './ObjectMap.module.css';

export const MapSection = (props) => {
    return <div className={classes['map-wrapper']}>{props.map}</div>
}