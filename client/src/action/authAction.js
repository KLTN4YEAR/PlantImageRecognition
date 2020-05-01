import axios from 'axios';
import { API_URL, auth } from '../config/helper';
import { returnErrors } from './errorActions';
import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    CLEAR_ERRORS,
    CLEAN_PROFILE,
    GET_AVATAR,
} from '../config/type';

export const loginWithGoogle = (accessToken) => dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const body = {
        access_token: accessToken
    }
    axios.post(`${API_URL}/api/auth/google`, body, config)
        .then((response) => {
            auth.authenticate(response.data);
            dispatch({
                type: LOGIN_SUCCESS
            });
            dispatch({
                type: GET_AVATAR
            });
        })
        .catch(err => {
            dispatch(
                returnErrors(err.response.data, err.response.status, 'GET_ERRORS')
            );
            dispatch({
                type: LOGIN_FAIL
            });
        });
}

export const loginWithFacebook = (accessToken) => dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const body = {
        access_token: accessToken
    };
    axios.post(`${API_URL}/api/auth/facebook`, body, config)
        .then((response) => {
            console.log('scfb');
            auth.authenticate(response.data);
            dispatch({
                type: LOGIN_SUCCESS
            });
            dispatch({
                type: GET_AVATAR
            });
        })
        .catch(err => {
            dispatch(
                returnErrors(err.response.data, err.response.status, 'GET_ERRORS')
            );
            dispatch({
                type: LOGIN_FAIL
            });
        });
}

export const logout = () => dispatch => {
    dispatch({
        type: LOGOUT_SUCCESS
    });
    dispatch({
        type: CLEAN_PROFILE
    });
    dispatch({
        type: CLEAR_ERRORS
    });
};