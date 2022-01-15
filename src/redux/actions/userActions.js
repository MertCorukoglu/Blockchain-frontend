import axios from "axios";
import { ACTION_TYPES } from "./actionTypes";
import { setError } from "./commonActions";

export const login = (loginResponse) => {
  return {
    type: ACTION_TYPES.LOGIN,
    payload: loginResponse,
  };
};

export const loginRequest = (request) => {
  const headers = {};
  return (dispatch) => {
    axios({
      method: "post",
      baseURL: "http://localhost:4000",
      url: "auth/login",
      headers,
      data: request,
      withCredentials: false,
    })
      .then((response) => {
        localStorage.setItem("token", response.data.payload?.token);
        dispatch(login(response.data.payload));
      })
      .catch((error) => {
        dispatch(setError(error.response.data));
      });
  };
};

export const register = (registerResponse) => {
  return {
    type: ACTION_TYPES.REGISTER,
    payload: registerResponse,
  };
};

export const registerRequest = (request) => {
  const headers = {};
  return (dispatch) => {
    axios({
      method: "post",
      baseURL: "http://localhost:4000",
      url: "auth/register",
      headers,
      data: request,
      withCredentials: false,
    })
      .then((response) => {
        dispatch(register(response.data.payload));
      })
      .catch((error) => {
        dispatch(setError(error.response.data));
      });
  };
};


export const getProfile = (profileResponse) => {
  return {
    type: ACTION_TYPES.GET_PROFILE,
    payload: profileResponse,
  };
};

export const getProfileRequest = () => {
  const headers = {
    authorization: `Bearer ${localStorage.getItem("token")}`
  };
  return (dispatch) => {
    axios({
      method: "post",
      baseURL: "http://localhost:4000",
      url: "user/getProfile",
      headers,
      data: {},
      withCredentials: false,
    })
      .then((response) => {
        dispatch(getProfile(response.data.payload));
      })
      .catch((error) => {
        dispatch(setError(error.response.data));
      });
  };
};

