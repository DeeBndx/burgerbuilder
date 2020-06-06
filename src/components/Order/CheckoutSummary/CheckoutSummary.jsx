import React from 'react';

import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";

import classes from "./CheckoutSummary.module.scss";

const checkoutSummary = (props) => {
  return(
    <div className={classes.CheckoutSummary}>
      <h1>We Hope It's Amazing!</h1>
      <div style={{width: "100%", margin: "auto"}}>
        <Burger ingredients={props.ingredients}></Burger>
      </div>
      <Button 
        btnType="btn--tertiary"
        clicked={props.checkoutCancelled}>
          CANCEL
      </Button>
      <Button 
        clicked={props.checkoutContinued}>
          CONTINUE
      </Button>
    </div>
  )
}

export default checkoutSummary;