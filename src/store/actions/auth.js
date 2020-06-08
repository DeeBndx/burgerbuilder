import axios from "axios";
import * as actionTypes from "./actionsTypes";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSucces = (authData) => {
  return {
    type: actionTypes.AUTH_SUCCES,
    authData: authData,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

export const auth = (email, password, isSignup) => {
  return (dispatch) => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    let url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCDlXWnbgwRv8Gk2CCYjX4oj32P-kkOQxQ"
    if ( !isSignup ) {
      url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCDlXWnbgwRv8Gk2CCYjX4oj32P-kkOQxQ"
    }
    axios
      .post(
        url,
        authData
      )
      .then(response => {
        console.log(response);
        dispatch(authSucces(response.data));
      })
      .catch(error => {
        console.log(error);
        dispatch(authFail(error.data));
      });
  };
};
