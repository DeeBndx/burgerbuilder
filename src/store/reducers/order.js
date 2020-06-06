import * as actionTypes from "../actions/actionsTypes";
import { updateObject, randomNumber } from "../utility";

const initialState = {
  orders: [],
  orderNumber: "",
  loading: false,
  purchased: false,
};

const purchaseInit = (state, action) => updateObject(state, { purchased: false });
const purchaseBurgerStart = (state, action) => updateObject(state, { loading: true });
const purchaseBurgerSucces = (state, action) => {
  const newOrder = updateObject(action.orderData, { id: action.orderId });

  const orderNumber = randomNumber(12);

  console.log(action)

  return updateObject(state, {
    loading: false,
    purchased: true,
    orderNumber: action.orderNumber,
    orders: state.orders.concat(newOrder),
  });
}
const purchaseBurgerFail = (state, action) => updateObject(state, { loading: false });
const fetchOrdersStart = (state, action) => updateObject(state, { loading: true });
const fetchOrdersSucces = (state, action) => updateObject(state, {orders: action.orders, loading: false});
const fetchOrdersFail = (state, action) => updateObject(state, { loading: false });

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PURCHASE_INIT: return purchaseInit(state, action);
    case actionTypes.PURCHASE_BURGER_START: return purchaseBurgerStart(state, action);
    case actionTypes.PURCHASE_BURGER_SUCCES: return purchaseBurgerSucces(state, action);
    case actionTypes.PURCHASE_BURGER_FAIL: return purchaseBurgerFail(state, action);
    case actionTypes.FETCH_ORDERS_START: return fetchOrdersStart(state, action);
    case actionTypes.FETCH_ORDERS_SUCCES: return fetchOrdersSucces(state, action);
    case actionTypes.FETCH_ORDERS_FAIL: return fetchOrdersFail(state, action);

    default: return state;
  }
};

export default reducer;