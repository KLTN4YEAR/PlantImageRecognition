import { GET_ERRORS, CLEAR_ERRORS } from '../config/type';

const initialState = {
    msg: null,
}

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_ERRORS:
            return {
                msg: action.payload.message,
            };
        case CLEAR_ERRORS:
            return {
                msg: null,
            };
        default:
            return state;
    }
}