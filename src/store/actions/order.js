import * as actionTypes from "./actionsTypes";
import axios from "../../axios-orders";

export const purchaseBurgerSucces = (id, orderData) => {
  return {
    type: actionTypes.PURCHASE_BURGER_SUCCES,
    orderId: id,
    orderData: orderData,
    orderNumber: orderData.orderNumber
  };
};

export const purchaseBurgerFail = (error) => {
  return {
    type: actionTypes.PURCHASE_BURGER_FAIL,
    error: error,
  };
};

export const purchaseBurgerStart = () => {
  return {
    type: actionTypes.PURCHASE_BURGER_START,
  };
};

export const purchaseBurger = (orderData, token) => {
  return (dispatch) => {
    dispatch(purchaseBurgerStart());
    axios
      .post("/orders.json?auth=" + token, orderData)
      .then((response) => {
        console.log(response.data);
        dispatch(purchaseBurgerSucces(response.data, orderData));
      })
      .catch((error) => {
        dispatch(purchaseBurgerFail(error));
      });
  };
};

export const purchaseInit = () => {
  return {
    type: actionTypes.PURCHASE_INIT,
  };
};


export const fetchOrdersStart = () => {
  return {
    type: actionTypes.FETCH_ORDERS_START
  }
}

export const fetchOrdersSucces = (orders) => {
  return {
    type: actionTypes.FETCH_ORDERS_SUCCES,
    orders: orders
  }
}

export const fetchOrdersFail = (error) => {
  return {
    type: actionTypes.FETCH_ORDERS_FAIL,
    error: error
  }
}

export const fetchOrders = (token) => {
  return dispatch => {
    dispatch(fetchOrdersStart())
    axios.get("/orders.json?auth=" + token)
      .then(res => {
        const fetchedOrders = []
        for (let key in res.data) {
          fetchedOrders.push({
            id: key,
            ...res.data[key]
          });
        }
        dispatch(fetchOrdersSucces(fetchedOrders));
      })
      .catch(err => {
        dispatch(fetchOrdersFail(err))
      })
  }
}
