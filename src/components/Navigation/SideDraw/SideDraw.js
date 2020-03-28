import React from 'react';
import Logo from '../../Logo/Logo';
import classes from './SideDraw.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Aux from '../../../hocs/Auxi/Auxi';
import Backdrop from '../../UI/Backdrop/Backdrop';


const SideDraw = props => {

  let attachedClasses = [classes.SideDraw, classes.Close];
  if(props.open){
    attachedClasses =  [classes.SideDraw, classes.Open];
  }

  return (
    <Aux>
    <Backdrop show={props.open} clicked={props.closed}/>
    <div className={attachedClasses.join(' ')}>
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav>
        <NavigationItems />
      </nav>
    </div>
    </Aux>
  );

}

export default SideDraw;