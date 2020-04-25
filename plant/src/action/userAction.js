import axios from 'axios';
import { API_URL, auth } from '../config/helper';
import { returnErrors } from './errorActions';

import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    FETCH_USER,
    ERROR_RESPONSE,
    FOLLOW,
    FOLLOWED,
    GET_AVATAR,
    DISPATCH_BODY,
    CLEAN_BODYADMIN
} from '../config/type';

//update info user
export const dispatchBodyAdmin = () => dispatch => {
    dispatch({
        type: DISPATCH_BODY
    });
}

export const cleanBodyAdmin = () => dispatch => {
    dispatch({
        type: CLEAN_BODYADMIN
    });
}



//get info user
export const fetch = (uid) => {
    console.log(uid)
    const config = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    };
    return function(dispatch) {
        axios.get(`${API_URL}/users/${uid}`, config)
            .then((response) => {
                console.log(response.data)
                dispatch({
                    type: FETCH_USER,
                    payload: response.data.userInfo
                });
            })
            .catch(err => {
                dispatch({
                    type: ERROR_RESPONSE
                });
            });
    }
};

//update info user
export const update = (userID, credentials, user) => dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + credentials.t
        }
    }
    const body = user;
    return axios.put(`${API_URL}/users/editProfile/` + userID, body, config)
        .then(res => {
            if (res.data.avatar) {
                sessionStorage.removeItem('avatar');
                auth.setAvatar(res.data.avatar);
                dispatch({
                    type: GET_AVATAR
                });
            }
            return true;
        })
        .catch(err => {
            return err;
        });
}