import React from 'react';
import classes from './Input.module.css';

const Input = props => {

  let inputElement;
  const inputClass = [classes.InputElement];

  switch (props.elementType) {
    case 'input':
      inputElement = <input className={inputClass.join(' ')} name={props.name}  {...props.elementConfig} value={props.value}  onChange={props.onChanged}/>
      break;
    case 'textarea':
      inputElement = <textarea className={inputClass.join(' ')} name={props.name}  {...props.elementConfig} value={props.value}  onChange={props.onChanged}/>
      break;
    case 'select':
      inputElement =
        <select className={inputClass.join(' ')} value={props.value}  name={props.name} onChange={props.onChanged} >
          {
            props.elementConfig.options.map(el=>{
              return <option key={el.value}  value={el.value} >{el.displayValue}</option>
            })
          }
        </select>
      break;
    default:
      inputElement = <input className={inputClass.join(' ')}  {...props.elementConfig} value={props.value} />
      break;
  }

  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
    </div>
  )
}


export default Input;
