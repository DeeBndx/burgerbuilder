import React from 'react';

import classes from './BuildControl.module.scss';

const buildControl = (props) => {
  return(
    <div className={classes.BuildControl}>
      <div className={classes.label}>{props.label}</div>
      <div>
        <button className={classes.button} onClick={props.removed} disabled={props.disabled}>-</button>
        <button className={classes.button} onClick={props.added}>+</button>
      </div>
    </div>
  )
}

export default buildControl;