import * as actions from "../actions/actionsTypes";
import { updateObject } from "../utility";

const initialState = {
  ingredients: null,
  totalPrice: 4,
  error: false,
};

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

const addIngredient = (state, action) => {
  const updatedIngredient = {
    [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
  };
  const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
  const updatedState = {
    ingredients: updatedIngredients,
    totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
  };
  return updateObject(state, updatedState);
};

const removeIngredient = (state, action) => {
  const updatedIng = {
    [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
  };
  const updatedIngs = updateObject(state.ingredients, updatedIng);
  const updatedStat = {
    ingredients: updatedIngs,
    totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
  };
  return updateObject(state, updatedStat);
};

const removeAllIngredients = (state, action) => updateObject(state, {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
  });

const setIngredient = (state, action) => updateObject(state, {
    ingredients: action.ingredients,
    totalPrice: 4,
    error: false,
  });

const fetchIngredientsFailed = (state, action) => updateObject(state, { error: true });

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_INGREDIENT: return addIngredient(state, action);

    case actions.REMOVE_INGREDIENT: return removeIngredient(state, action);

    case actions.REMOVE_ALL_INGREDIENTS: return removeAllIngredients(state, action);

    case actions.SET_INGREDIENTS: return setIngredient(state, action);

    case actions.FETCH_INGREDIENTS_FAILED: return fetchIngredientsFailed(state, action);

    default:
      return state;
  }
};

export default reducer;