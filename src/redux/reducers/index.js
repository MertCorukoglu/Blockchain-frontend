import { combineReducers } from 'redux'
import commonReducer from './commonReducer';
import userReducer from './userReducer';
import postReducer from './postReducer'

const rootReducer = combineReducers({
    user:userReducer,
    common: commonReducer,
    post:postReducer

});

export default rootReducer;