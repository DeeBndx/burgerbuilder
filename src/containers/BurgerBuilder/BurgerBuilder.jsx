import React, { Component } from "react";
import axios from "../../axios-orders";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

import Aux from "../../hoc/Auxiliary/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import classes from "./BurgerBuilder.module.scss";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

class BurgerBuilder extends Component {
  state = {
    purchasing: false,
  };

  componentDidMount() {
    this.props.onInitIngredients();
  }

  emptyBurger = () => {
    const ingredients = this.state.ingredients;

    let updatedIngredients = Object.keys(ingredients).map((igKey) => {
      return (ingredients[igKey] = 0);
    }, 0);

    this.updatePurchaseState(updatedIngredients);
  };

  purchaseContinueHandler = () => {
    this.props.onInitPurchased();

    this.props.history.push({
      pathname: "/checkout",
    });
  };

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);

    return sum > 0;
  }

  purchaseHandler = () => {
    if (this.props.isAuth) {
      this.setState({ purchasing: true });
    } else {
      this.props.onSetAuthRedirectPath("/checkout")
      this.props.history.push("/login");
    }
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  render() {
    const disabledInfo = {
      ...this.props.burgerIngs,
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = null;
    let burger = this.props.error ? (
      <p>Ingeredients can't be loaded</p>
    ) : (
      <Spinner background="#fff" />
    );

    if (this.props.burgerIngs) {
      burger = (
        <Aux>
          <BuildControls
            ingredientAdded={this.props.onIngredientAdded}
            ingredientRemoved={this.props.onIngredientRemoved}
            emptyBurger={this.props.onBurgerEmpty}
            disabled={disabledInfo}
            ordered={this.purchaseHandler}
            purchasable={this.updatePurchaseState(this.props.burgerIngs)}
            price={this.props.burgerPrice}
            isAuth={this.props.isAuth}
          />
          <Burger ingredients={this.props.burgerIngs}></Burger>
        </Aux>
      );

      orderSummary = (
        <OrderSummary
          ingredients={this.props.burgerIngs}
          purchaseCancled={this.purchaseCancelHandler}
          purchaseContinue={this.purchaseContinueHandler}
          price={this.props.burgerPrice}
        />
      );
    }

    return (
      <Aux>
        <h1 className={classes.heading}>Build Your Perfect Burger</h1>

        <div className={classes.Builder}>
          <Modal
            show={this.state.purchasing}
            modalClosed={() => this.purchaseCancelHandler()}
          >
            {orderSummary}
          </Modal>

          {burger}
        </div>
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    burgerIngs: state.burgerbuilder.ingredients,
    burgerPrice: state.burgerbuilder.totalPrice,
    error: state.burgerbuilder.error,
    isAuth: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIngredientAdded: (ingName) => dispatch(actions.addIngredient(ingName)),
    onIngredientRemoved: (ingName) =>
      dispatch(actions.removeIngredient(ingName)),
    onBurgerEmpty: () => dispatch(actions.removeAllIngredients()),
    onInitIngredients: () => dispatch(actions.initIngredients()),
    onInitPurchased: () => dispatch(actions.purchaseInit()),
    onSetAuthRedirectPath: (path) =>
      dispatch(actions.setAuthRedirectPath(path)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(BurgerBuilder, axios));
