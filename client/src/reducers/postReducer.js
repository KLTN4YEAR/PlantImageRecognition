import { GET_INFO_POST, ERROR_RESPONSE, GET_LIST_POST } from '../config/type';

const INITIAL_STATE = {
    post: {},
    listPost: [],
    loaded: false,
};

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_LIST_POST:
            return {...state, listPost: action.payload, loaded: true };
        case GET_INFO_POST:
            return {...state, post: action.payload };
        default:
            return state;
    }
}