import React from 'react';
import classes from './ToggleSideDraw.module.css';

const ToggleSideDraw = (props) => (
  <div className={classes.ToggleSideDraw} onClick={props.clicked}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default ToggleSideDraw;



