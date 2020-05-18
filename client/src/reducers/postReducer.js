import { GET_INFO_POST, ERROR_RESPONSE } from '../config/type';

const INITIAL_STATE = {
    post: {},
};

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_INFO_POST:
            return {...state, post: action.payload };
        default:
            return state;
    }
}