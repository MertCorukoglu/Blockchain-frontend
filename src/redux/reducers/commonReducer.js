import { ACTION_TYPES } from "../actions/actionTypes";

const initialState = {
  isError: false,
  errorMessage: "",
};

const commonReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_ERROR: {
      return {
        ...state,
        isError: action.payload.isError,
        errorMessage: action.payload.message,
      };
    }

    default:
      return state;
  }
};
export default commonReducer;
