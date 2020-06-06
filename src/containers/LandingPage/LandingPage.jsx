import React from 'react';

import Aux from "../../hoc/Auxiliary/Auxiliary";
import ProductCard from "../../components/Products/ProductCard/ProductCard";
import classes from "./LandingPage.module.scss";
import { Component } from 'react';

// import fallImage from "../../assets/images/fall.jpg";

class LandingPage extends Component {
  render(){
    return(
      <Aux>
        <article>      
          <div className={classes.HeroImage}></div>
  
          <div className={classes.Heading}>
            <h2>Build Your</h2>
            <h1>PERFECT BURGER</h1>
          </div>
  
          <p className={classes.landingText}>
            The tastiest burger you'll ever eat.
            <br/>
            Only the best ingredients for your <span>PERFECT BURGER</span>
          </p>
  
          <aside className={classes.CTA}>
            <div></div>
            
            <button>Build A Burger</button>
            
            <section className={classes.blockOne}></section>
            <section className={classes.blockTwo}></section>
          </aside>
        </article>
  
        <article className={classes.OtherProducts}>
          <h1 className={classes.heading}>Others Are Loving</h1>
          <ProductCard 
            name="The Herbivore" 
            img="imgTheHerbivore"
            creator="veggies international"
            rating="4.2"
            price="9.90"
            text="Filled to the brim with meat alternatives and delicious greens. This is the burger for those looking for a plant based burger experience." 
          />

          <ProductCard 
            name="The Meat Lover" 
            img="imgTheMeatLover"
            creator="lions meat firm"
            rating="4.6"
            price="12.40" 
            text="The burger for those who can heat an entire cow on their own. Overflowing with the best meat and an extra slice of cheese makes this the definition of Meat." 
          />

          <ProductCard 
            name="The Wholemeal" 
            img="imgTheWholeMeal"
            creator="our inhouse chefs"
            rating="3.9"
            price="10.00" 
            text="With a wholemeal bun, seeds overtop and a little extra salad and greens, this is for the healthy type who can't quite live without the meat." 
          />

          <ProductCard 
            name="The Morning Sun" 
            img="imgTheMorningSun"
            creator="the chick coup"
            rating="3.7"
            price="11.40" 
            text="With a wholemeal bun, seeds overtop and a little extra salad and greens, this is for the healthy type who can't quite live without the meat." 
          />
        </article>
        
        <article>

        </article>
        
      </Aux>
    );
  }
}

export default LandingPage;