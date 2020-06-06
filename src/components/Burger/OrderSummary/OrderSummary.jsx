import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import Aux from "../../../hoc/Auxiliary/Auxiliary";
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
      return ( 
        <li key={igKey}>
          <span style={{textTransform: "capitalize"}}>{igKey}</span>: {this.props.ingredients[igKey]}
        </li>
      );
    });
    
    return(
      <Aux>
      <h3>Order Your Perfect Burger</h3>
      <p>A delicisous burger with:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <span>For a total: <strong>${this.props.price.toFixed(2)}</strong> </span>
      <p>Continue to Checkout?</p>
      
      <Button 
        btnType="btn--secondary"
        clicked={this.props.purchaseCancled}
      >Cancel</Button>

      <Button 
        btnType="btn" 
        clicked={this.props.purchaseContinue}
      >CONTINE</Button>
    </Aux>
    );
  }
}

export default OrderSummary;