import axios from 'axios';
import { API_URL } from '../config/helper';
import {
    GET_INFO_POST,
    ERROR_RESPONSE
} from '../config/type';
export var successMess = '';

export const newPost = (credentials, post) => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + credentials.token
        }
    }
    const body = post;
    return axios.post(`${API_URL}/api/post/create`, body, config)
        .then(res => {
            successMess = res.data.message;
            return true;
        })
        .catch(error => {
            console.log('error: ', error)
            return error;
        });
};
export const getPostInfo = (credentials, pid) => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + credentials.token,
        }
    };
    console.log('cre', credentials.token)
    return function(dispatch) {
        axios.get(`${API_URL}/api/post/getInfoPost/${pid}`, config)
            .then((response) => {
                console.log('res', response.data.result.post);
                dispatch({
                    type: GET_INFO_POST,
                    payload: response.data.result.post
                });
            })
            .catch(err => {
                console.log('err', err);
                dispatch({
                    type: ERROR_RESPONSE
                });
            });
    }
};