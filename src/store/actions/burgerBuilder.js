import * as actionTypes from "./actionsTypes";
import { updateObject } from "../utility";
import axios from "../../axios-orders";

export const addIngredient = (name) => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientName: name
  }
}

export const removeIngredient = (name) => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName: name
  }
}

export const removeAllIngredients = () => {
  return {
    type: actionTypes.REMOVE_ALL_INGREDIENTS
  }
}

export const setIngredients = (ings) => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients: ings
  }
}

export const fetchIngredientsFailed = () => {
  return {
    type: actionTypes.FETCH_INGREDIENTS_FAILED
  }
}

export const initIngredients = () => {
  return dispatch => {
    axios.get("https://react-my-burger-1af39.firebaseio.com/ingredients.json").then(response => {
      dispatch(setIngredients(response.data));
    }).catch(error => {
      dispatch(fetchIngredientsFailed())
    });
  }
}