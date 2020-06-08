import * as actionTypes from "../actions/actionsTypes";
import { updateObject } from "../utility";

const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false,
}

const authStart = (state, action) => {
  
}

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START: return updateObject(state, { error: null, loading: true})

    default: return state
  }
}

export default reducer