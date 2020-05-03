import axios from 'axios';
import { API_URL, auth } from '../config/helper';
import { returnErrors } from './errorActions';
import {
    GET_INFO_USER,
    ERROR_RESPONSE
} from '../config/type';
//get info user
export const getInfo = (credentials, uid) => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + credentials.token,
        }
    };
    return function(dispatch) {
        axios.get(`${API_URL}/api/user/getInfo/${uid}`, config)
            .then((response) => {
                //console.log('res', response)
                dispatch({
                    type: GET_INFO_USER,
                    payload: response.data.result.user
                });
            })
            .catch(err => {
                dispatch({
                    type: ERROR_RESPONSE
                });
            });
    }
};