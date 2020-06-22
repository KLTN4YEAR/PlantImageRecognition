import axios from 'axios';
import { API_URL } from '../config/helper';
import {
    SEARCH_PLANT,
    ERROR_RESPONSE
} from '../config/type';

export const searchPlant = (credentials, plantName) => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + credentials.token,
        }
    };
    return function(dispatch) {
        axios.get(`${API_URL}/api/plant/searchPlant?filter=` + plantName, config)
            .then((response) => {
                dispatch({
                    type: SEARCH_PLANT,
                    payload: response.data.result.plants
                
                });
            })
            .catch(err => {
                dispatch({
                    type: ERROR_RESPONSE
                });
            });
    }
};