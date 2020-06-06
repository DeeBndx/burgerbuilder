import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "../../../axios-orders";
import { connect } from "react-redux";
import { randomNumber } from "../../../store/utility";

import classes from "./ContactData.module.scss";

import Aux from "../../../hoc/Auxiliary/Auxiliary";
import Button from "../../../components/UI/Button/Button";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Input/Input";
import Modal from "../../../components/UI/Modal/Modal";
import withErrorHandler from "../../../hoc/withErrorHandler/withErrorHandler";
import * as actions from "../../../store/actions/index";

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Name",
          label: "Your name",
          errormsg: "Please enter a name",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      street: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Street",
          label: "Your street",
          errormsg: "Please enter an address",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      zipCode: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Zip code",
          label: "City Zip code",
          errormsg: "Zip code must be 4 numbers",
        },
        value: "",
        validation: {
          required: true,
          minLength: 4,
          maxLength: 4,
        },
        valid: false,
        touched: false,
      },
      country: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Country",
          label: "Country",
          errormsg: "Please enter a country",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Your Email",
          label: "Your email",
          errormsg: "Please enter a valid email",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      deliveryMethod: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "cheapest", displayValue: "Cheapest" },
            { value: "fastest", displayValue: "Fastest" },
          ],
          label: "Delivery method",
        },
        value: "cheapest",
        validation: {},
        valid: true,
      },
    },
    orderNumber: null,
    formIsValid: false,
    purchaseComplete: false,
  };

  orderHandler = (event) => {
    event.preventDefault();
    const formData = {};

    for (let formElementId in this.state.orderForm) {
      formData[formElementId] = this.state.orderForm[formElementId].value;
    }
    const orderNumber = randomNumber(12);

    const order = {
      ingredients: this.props.burgerIngs,
      price: this.props.burgerPrice,
      orderData: formData,
      orderNumber: orderNumber
    };

    this.props.onOrderBurger(order);
  };

  chcekValidity(value, rules) {
    let isValid = true;

    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }

    return isValid;
  }

  inputChangedHandler = (event, inputId) => {
    const updatedOrderForm = {
      ...this.state.orderForm,
    };
    const updatedFormElement = { ...updatedOrderForm[inputId] };

    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.chcekValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    updatedFormElement.touched = true;
    updatedOrderForm[inputId] = updatedFormElement;

    let formIsValid = true;
    for (let input in updatedOrderForm) {
      formIsValid = updatedOrderForm[input].valid && formIsValid;
    }

    this.setState({ orderForm: updatedOrderForm, formIsValid: formIsValid });
  };

  

  render() {
    const formElementsArray = [];

    for (let key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key],
      });
    }

    let form = (
      <form onSubmit={this.orderHandler}>
        {formElementsArray.map((formElement) => (
          <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            label={formElement.config.elementConfig.label}
            placeholder={formElement.config.elementConfig.placeholder}
            errormsg={formElement.config.elementConfig.errormsg}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            changed={(event) => this.inputChangedHandler(event, formElement.id)}
          />
        ))}

        <Button isDisabled={!this.state.formIsValid}>ORDER</Button>
      </form>
    );
    
    if (this.props.loading) {
      form = <Spinner background="#fff" />;
    }

    return (
      <Aux>
        <Modal show={this.props.purchased}>
          <h1>We've recieved your order!</h1>
          <h3>
            We'll be in touch{" "}
            <span role="img" aria-label="Winky Face">
              😉
            </span>
          </h3>
          <p>
            Your order number: <em>{this.props.orderNumber}</em>
          </p>
          {/* <h4></h4> */}
          <Link to="/">
            <Button>Cool</Button>
          </Link>
        </Modal>

        <div className={classes.ContactData}>
          <h4>Who are you, And where can we find you?</h4>
          {form}
        </div>
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    burgerIngs: state.burgerbuilder.ingredients,
    burgerPrice: state.burgerbuilder.totalPrice,
    orderNumber: state.orders.orderNumber,
    loading: state.orders.loading,
    purchased: state.orders.purchased
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onOrderBurger: (orderData) => dispatch(actions.purchaseBurger(orderData))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(ContactData, axios));
