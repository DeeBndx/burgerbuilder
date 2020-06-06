import React from 'react';

import classes from "./SideDrawer.module.scss";
import Logo from '../../Logo/Logo';
import NavItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from "../../../hoc/Auxiliary/Auxiliary";

const sideDrawer = (props) => {

  let attachedClasses = [classes.SideDrawer, classes.Close];
  if(props.open){
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  
  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed}></Backdrop>

      <div className={attachedClasses.join(" ")}>
        <div className={classes.Logo}>
          <Logo/>
        </div>
        <nav>
          <NavItems></NavItems>
        </nav>
      </div>
    </Aux>
  );
}

export default sideDrawer;