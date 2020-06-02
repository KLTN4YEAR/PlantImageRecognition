import AsyncStorage from '@react-native-community/async-storage';
import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from '../config/type';
import { auth } from '../config/helper';
const initialState = {
    isAuthenticated: false,
    isAuthorized: false
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
            auth.removeStorage();
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                isAuthorized: false
            };

        default:
            return state;
    }
}