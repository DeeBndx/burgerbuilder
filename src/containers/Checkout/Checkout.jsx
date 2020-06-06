import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";

class Checkout extends Component {

  navigateBack = () => this.props.history.goBack();

  checkoutContinued = () =>
    this.props.history.replace("/checkout/contact-data");

  render() {
    let summary = <Redirect to="/builder" />;
    if (this.props.burgerIngs) {
      // const purchasedRedirect = this.props.purchased ? (
      //   <Redirect to="/" />
      // ) : null;

      summary = (
        <div>
          {/* {purchasedRedirect} */}
          <CheckoutSummary
            ingredients={this.props.burgerIngs}
            checkoutCancelled={this.navigateBack}
            checkoutContinued={this.checkoutContinued}
          />

          <Route
            path={this.props.match.path + "/contact-data"}
            component={ContactData}
          />
        </div>
      );
    }
    return summary;
  }
}

const mapStateToProps = (state) => {
  return {
    burgerIngs: state.burgerbuilder.ingredients,
    purchased: state.orders.purchased,
  };
};


export default connect(mapStateToProps)(Checkout);
