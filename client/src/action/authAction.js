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

export const loginSocial = (accessToken) => dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const body = {
        access_token: accessToken
    }
    axios.post(`${API_URL}/api/auth/oauth/google`, body, config)
        .then((response) => {
            console.log('gg');
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
    axios.post(`${API_URL}/api/auth/oauth/facebook`, body, config)
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
            console.log('fberr');
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
    // window.location.href = `${CLIENT_ROOT_URL}`;
};