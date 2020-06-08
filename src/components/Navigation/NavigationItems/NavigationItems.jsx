import React from 'react';

import classes from "./NavigationItems.module.scss";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props) => {
  return(
    <ul className={classes.NavigationItems}>
      {/* <NavigationItem>Home</NavigationItem> */}

      <NavigationItem link="/" exact>Home</NavigationItem>
      <NavigationItem link="/builder">Burger Builder</NavigationItem>
      <NavigationItem link="/orders">Orders</NavigationItem>
      <NavigationItem link="/login">Login</NavigationItem>
    </ul>
  );
}

export default navigationItems;