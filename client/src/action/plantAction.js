import axios from 'axios';
import { API_URL } from '../config/helper';

export const searchPlant = (credentials, plantName) => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + credentials.token,
        }
    };
    return axios.get(`${API_URL}/api/plant/searchPlant?filter=` + plantName, config)
        .then(res => {
            console.log(res.data)
            return res.data;
        })
        .catch(err => {
            return err;
        });
};