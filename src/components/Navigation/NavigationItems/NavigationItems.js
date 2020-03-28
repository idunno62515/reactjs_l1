import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem'
import classes from './NavigationItems.module.css';


const NavigationItems = props => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" active >Burger Builder</NavigationItem>
    <NavigationItem linl="/">Checkout</NavigationItem>
  </ul>
);

export default NavigationItems;
