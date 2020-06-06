import React from 'react';

import logoSvg from "../../assets/images/logo.svg";
import classes from './Logo.module.scss';

const logo = (props) => {
  return(
    <div className={classes.Logo} style={{height: props.height}}>
      <span><strong>Build A Burger</strong> <img src={logoSvg} alt="Build A Burger"/></span>
    </div>
  )
}

export default logo;