import axios from 'axios';
import { API_URL } from '../config/helper';
export var successMess = '';

export const newPost = (post) => {
    const config = {
        headers: {
            'Accept': 'application/json',
        }
    }
    const body = post;
    return axios.post(`${API_URL}/api/post/create`, body, config)
        .then(res => {
            // console.log('create2');
            // console.log(res.data);
            successMess = res.data.message;
            return true;
        })
        .catch(error => {
            console.log(error)
            console.log(error.response);
            return error.response.data;
        });
}