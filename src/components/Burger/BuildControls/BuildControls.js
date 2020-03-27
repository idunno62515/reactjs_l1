import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
]

const BuildControls = props => (
  <div className={classes.BuildControls}>
    <p>Current price : <strong>{props.price.toFixed(2)}</strong></p>
    {controls.map((el, index) => <BuildControl
      key={el.label}
      label={el.label}
      ingredientAdd={() => props.ingredientAdd(el.type)}
      ingredientMinus={() => props.ingredientMinus(el.type)}
      disabled={props.disabled[el.type]}
    />
    )}
    <button className={classes.OrderButton} disabled={!props.purchasable}>ORDER NOW</button>
  </div>
);

export default BuildControls;