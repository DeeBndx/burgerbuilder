import React, { Component } from "react";

import Aux from "../Auxiliary/Auxiliary";
import classes from "./Layout.module.scss";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from '../../components/Navigation/Sidedrawer/SideDrawer';

class Layout extends Component{
  state={
    showSideDrawer: false
  }

  showSideDrawerHandler = () => {
    this.setState((prevState) => {
      return {showSideDrawer: true}
    });
  }
  
  hideDrawerCloseHandler = () => {
    this.setState((prevState) => {
      return {showSideDrawer: false}
    });
  }
  
  render () {
    return (
      <Aux>
        <Toolbar
          openDrawer={this.showSideDrawerHandler}
          closeDrawer={this.hideDrawerCloseHandler}>
        </Toolbar>

        <SideDrawer 
          open={this.state.showSideDrawer} 
          closed={this.hideDrawerCloseHandler}>
        </SideDrawer>
    
        <main className={classes.main}>
          {this.props.children}
        </main>
      </Aux>
    );
  };
};

export default Layout