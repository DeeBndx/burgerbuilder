import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "../../axios-orders";
import * as actions from "../../store/actions/index";

import Order from "../../components/Order/Order";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import Spinner from "../../components/UI/Spinner/Spinner";

import classes from "./Orders.module.scss";

class Orders extends Component {
  componentDidMount() {
    this.props.onFetchOrders(this.props.authToken);
  }

  render() {
    let orders = <Spinner background="#fff"/>;
    if (!this.props.loading) {
      orders = this.props.orders.map((order) => (
        <Order
          key={order.id}
          ingredients={order.ingredients}
          price={+order.price}
        />
      ));
    }

    return (
      <div style={{ marginTop: "80px" }} className={classes.OrderContainer}>
        {orders}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    orders: state.orders.orders,
    loading: state.orders.loading,
    authToken: state.auth.token
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchOrders: (token) => dispatch(actions.fetchOrders(token)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Orders, axios));
