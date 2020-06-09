import React from 'react';
import { Link } from "react-router-dom";

import classes from './Toolbar.module.scss';

import Logo from '../../Logo/Logo';
import NavigationItems from "../NavigationItems/NavigationItems";
import BurgerToggle from "../Sidedrawer/BurgerToggle/BurgerToggle";

const toolbar = (props) => {
  return(
    <header className={classes.Toolbar}>

      <BurgerToggle
        className={classes.BurgerToggle}
        clicked={props.openDrawer}> 
      </BurgerToggle>
      
      <Link to="/" className={classes.Logo}>
        <Logo/>
      </Link>
      <nav className={classes.DesktopOnly}>
        <NavigationItems isAuth={props.isAuth}></NavigationItems>
      </nav>
    </header>
  );
}

export default toolbar;