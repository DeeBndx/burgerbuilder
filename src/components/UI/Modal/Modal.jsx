import React, { Component } from 'react';

import classes from "./Modal.module.scss";
import Aux from "../../../hoc/Auxiliary/Auxiliary";
import Backdrop from "../Backdrop/Backdrop";

class Modal extends Component{
  shouldComponentUpdate(nextProps, nextState){
    return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
  }

  // componentWillUpdate() {
  //   console.log("[Modal] componentWillUpdate");
  // }
  
  render() {  
    return(
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed}></Backdrop>
        <div className={classes.Modal} style={{transform: this.props.show ? "translateY(0)" : "translateY(-100vh)"}}>
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default Modal;