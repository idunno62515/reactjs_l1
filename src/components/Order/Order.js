import React from 'react';
import classes from './Order.module.css';


const Order = (props) => {

  const listOrder =Object.entries(props.ingredients).map((el, index)=>{
    return <span key={index} style={{
      textTransform : 'capitalize',
      display: 'inline-block',
      margin: '0 8px',
      border: '1px solid #ccc',
      padding: '5px'
    }}>  {el[0]} : ({el[1]}) </span>
  })

  return (
    <div className={classes.Order}>
      <p>Ingredients: {listOrder}</p>
      <p>Price: <strong>USD {props.price.toFixed(2)}</strong></p>
    </div>
  )
}

export default Order;
