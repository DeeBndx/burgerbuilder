import React from 'react';

import classes from "./ProductCard.module.scss";
// import { image } from "../../../assets/images/served@2x.jpg";
import imgStar from "../../../assets/images/star.png"
import imgTheHerbivore from "../../../assets/images/burgerTheHerbivore.jpg";
import imgTheMeatLover from "../../../assets/images/burgerTheMeatLover.jpg";
import imgTheWholeMeal from "../../../assets/images/burgerTheWholemeal.jpg";
import imgTheMorningSun from "../../../assets/images/burgerTheMorningSun.jpg";

import Button from "../../UI/Button/Button";


const productCard = (props) => {
  return(
    <div className={classes.ProductCard}>
      <div 
        className={classes.img} 
        style={{
          backgroundImage:`url(${imgTheHerbivore})`,
          backgroundPosition: "center",
          backgroundSize: "cover",

        }}
      >

      </div>

      <div className={classes.Creator}>
        <h1>{props.name}</h1>
        <p><strong>by</strong> {props.creator}</p>
      </div>

      <div className={classes.Ratings}>
        <img src={imgStar} alt="star"/>
        <span>{props.rating}/5  42 ratings</span>
      </div>

      <p className={classes.Description}>
        {props.text}
      </p>

      <h2 className={classes.Price}>${props.price}</h2>
      
      <div className={classes.Buttons}>
        <Button btnType="btn--tertiary">Customize</Button>
        <Button>Add to Order</Button>
      </div>

    </div>
  )
};

export default productCard;