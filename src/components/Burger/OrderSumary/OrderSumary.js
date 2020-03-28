import React, { useEffect } from 'react';
import Aux from '../../../hocs/Auxi/Auxi';
import Button from '../../UI/Button/Button';



const OrderSumay = props => {

  useEffect(() => {
    console.log('Update');
  });

  const ingredientSumary = Object.entries(props.ingredients)
    .map((el, index) => (
      <li key={index} >
        <span style={{ textTransform: 'capitalize' }} > {el[0]}</span>: {el[1]}
      </li>
    ));

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burder with the following ingredients:</p>
      <ul>
        {ingredientSumary}
      </ul>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={props.purchaseCancel}>CANCEL</Button>
      <Button btnType="Success" clicked={props.purchaseContinue}>CONTINUE</Button>
    </Aux>
  )
};

export default OrderSumay;