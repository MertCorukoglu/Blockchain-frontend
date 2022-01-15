import { ACTION_TYPES } from "./actionTypes";


export const setError = (data) => {
    return {
      type: ACTION_TYPES.SET_ERROR,
      payload: data,
    };
  };
  