import React from "react";

import classes from "./BuildControls.module.scss";
import BuildControl from "./BuildControl/BuildControl";
import Button from "../../UI/Button/Button";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    <h1>Price: ${props.price.toFixed(2)}</h1>

    {controls.map((ctrl) => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
      />
    ))}

    <Button clicked={props.emptyBurger}>
      Empty Burger
    </Button>

    <button
      className={classes.btn}
      disabled={!props.purchasable}
      onClick={props.ordered}
    >
      {props.isAuth ? "Place Order" : "Sign up to order"}
    </button>
  </div>
);

export default buildControls;
