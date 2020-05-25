import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import userReducer from './userReducer';
import plantReducer from './plantReducer';
import postReducer from './postReducer';

export default combineReducers({
    error: errorReducer,
    auth: authReducer,
    user: userReducer,
    plant: plantReducer,
    post: postReducer,
});