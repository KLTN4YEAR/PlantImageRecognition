import axios from 'axios';
import { API_URL, auth } from '../config/helper';
import { returnErrors } from './errorActions';
import {
    FETCH_USER,
    ERROR_RESPONSE
} from '../config/type';




//get info user
export const getInfo = (credentials, uid) => {
    const config = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'authorization': 'Bearer ' + credentials.token,
    };
    console.log('token', `${API_URL}/api/user/getInfo/${uid}`, config);
    return function(dispatch) {
        axios.get(`${API_URL}/api/user/getInfo/${uid}`, config)
            .then((response) => {
                console.log('a')
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