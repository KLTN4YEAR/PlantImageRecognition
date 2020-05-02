import axios from 'axios';
import { API_URL } from '../config/helper';
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
            return error.response.data;
        });
}