import React from 'react';

import classes from "./Spinner.module.scss"

const spinner = (props) => {
  return (
    <div className={classes.Loader} style={{backgroundColor: props.background ? props.background.toString() : "inherit"}}>Loading...</div>
  );
}

export default spinner;