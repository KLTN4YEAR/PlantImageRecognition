import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import userReducer from './userReducer';
import plantReducer from './plantReducer'

export default combineReducers({
    error: errorReducer,
    auth: authReducer,
    user: userReducer,
    plant: plantReducer,
});