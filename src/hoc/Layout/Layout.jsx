import React, { Component } from "react";
import { connect } from "react-redux";

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
          isAuth={this.props.isAuth}
          openDrawer={this.showSideDrawerHandler}
          closeDrawer={this.hideDrawerCloseHandler}>
        </Toolbar>

        <SideDrawer 
          isAuth={this.props.isAuth}
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

const mapStateToProps = state => {
  return {
    isAuth: state.auth.token !== null
  }
}

export default connect(mapStateToProps)(Layout)