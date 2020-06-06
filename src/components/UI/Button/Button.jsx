import React from 'react';

import classes from './Button.module.scss';

const button = (props) => {
  return(
    <button
      className={[classes.btn, classes[props.btnType]].join(" ")}
      onClick={props.clicked}
      disabled={props.isDisabled}
    >{props.children}
    </button>
  );
}

export default button;