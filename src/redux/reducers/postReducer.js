import { ACTION_TYPES } from "../actions/actionTypes";

const initialState = {
    postResponse:{}
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case ACTION_TYPES.GET_PROFILE:{
            return {...state,postResponse:action.payload};
        }
        default: return state
    }
}
export default userReducer;