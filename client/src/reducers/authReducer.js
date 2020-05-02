import { AsyncStorage } from 'react-native';
import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS_ADMIN
} from '../config/type';

const initialState = {
    isAuthenticated: false,
    isAuthorized: false,
    isAuthorizedSubcomment: false
};

export default function(state = initialState, action) {
    switch (action.type) {
        case REGISTER_SUCCESS:
            return {
                ...state,
                ...action.payload,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true

            };
        case LOGIN_FAIL:
        case LOGOUT_SUCCESS:
        case REGISTER_FAIL:
            AsyncStorage.removeItem('jwt');
            AsyncStorage.removeItem('avatar');
            AsyncStorage.removeItem('name');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                isAuthorized: false,
                isAuthenticatedAdmin: false
            };
        default:
            return state;
    }
}