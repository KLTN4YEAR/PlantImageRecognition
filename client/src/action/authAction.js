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

export const loginWithGoogle = (profile) => dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const body = profile;
    console.log(body);
    axios.post(`${API_URL}/api/auth/google`, body, config)
        .then((response) => {
            //console.log(response.result);
            auth.authenticate(response.data.result);
            dispatch({
                type: LOGIN_SUCCESS
            });
            dispatch({
                type: GET_AVATAR
            });
        })
        .catch(err => {
            console.log(err)
            dispatch(
                returnErrors(err, 'GET_ERRORS')
            );
            dispatch({
                type: LOGIN_FAIL
            });
        });
}

export const loginWithFacebook = (profile) => dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const body = profile;
    console.log(body);
    axios.post(`${API_URL}/api/auth/facebook`, body, config)
        .then((response) => {
            auth.authenticate(response.data.result);
            // console.log('res', response.data.result);
            dispatch({
                type: LOGIN_SUCCESS
            });
            dispatch({
                type: GET_AVATAR
            });
        })
        .catch(err => {
            console.log('err: ', err)
            dispatch(
                returnErrors(err, 'GET_ERRORS')
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