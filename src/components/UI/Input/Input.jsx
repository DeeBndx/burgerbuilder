import React from 'react';

import classes from "./Input.module.scss";

const input = (props) => {
  let inputElement = null;
  let inputGroupClasses = [classes.InputGroup]
  
  switch(props.elementType) {
    case("input"):
      inputElement = <input 
        className={classes.Input} 
        {...props.elementConfig} 
        value={props.value}
        onChange={props.changed}
      />
      break;

    case("textarea"):
      inputElement = <textarea 
        className={classes.Input} 
        {...props.elementConfig} 
        value={props.value}
        onChange={props.changed}
      />
      break;

    case("select"):
      inputElement = (
        <select 
          className={classes.Input}
          value={props.value}
          onChange={props.changed}
        >
          {props.elementConfig.options.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.displayValue}</option>
          ))}
        </select>
      )
      break;

      default: 
        inputElement = <input 
          className={classes.Input} 
          {...props.elementConfig} 
          value={props.value} 
        />
  }

  if (props.invalid && props.shouldValidate && props.touched){
    inputGroupClasses.push(classes.InputGroup__inValid)
  }
  
  return(
    <div className={inputGroupClasses.join(" ")}>
      <label htmlFor="" className={classes.Label}>{props.label}</label>
      {inputElement}
      <p className={classes.errorMsg}>* {props.errormsg}</p>
    </div>
  )
};

export default input;