import { ACTION_TYPES } from "../actions/actionTypes";

const initialState = {
    loginResponse: {},
    registerResponse: {},
    profileResponse: {}
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.LOGIN:{
            return {...state,loginResponse:action.payload};
        }
        case ACTION_TYPES.REGISTER:{
            return {...state,registerResponse:action.payload};
        }
        case ACTION_TYPES.GET_PROFILE:{
            return {...state,profileResponse:action.payload};
        }
        default: return state
    }
}
export default userReducer;
