import React from 'react';

import classes from './BurgerToggle.module.scss';

const burgerToggle = (props) => {
  return(
    <div className={classes.BurgerToggle} onClick={props.clicked}>

    </div>
  );
}

export default burgerToggle;