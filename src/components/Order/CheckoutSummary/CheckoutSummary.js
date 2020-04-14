import React, { Fragment } from 'react';
import Burger from '../../Burger/Burger';
import classes from './CheckoutSummary.module.css';
import Button from '../../UI/Button/Button';

const CheckoutSummary = (props) => {
  return (
    <Fragment>
      <div className={classes.CheckoutSummary}>
        <h1>We hope it tastes well!</h1>
        <div style={{ width: '100%', height: '300px', margin: 'auto' }}>
          <Burger ingredients={props.ingredients} />
        </div>
        <Button btnType="Danger" clicked={props.onCheckoutCancelled}>Cancel</Button>
        <Button btnType="Success" clicked={props.onCheckoutContinued}>Continue</Button>
      </div>
    </Fragment>
  )
}

export default CheckoutSummary;