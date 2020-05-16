import { GET_ERRORS, CLEAR_ERRORS } from '../config/type';

const initialState = {
    msg: null,
    code: null,
    type: null,
}

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_ERRORS:
            return {
                msg: action.payload.message,
                code: action.payload.code,
                type: action.payload.type,
            };
        case CLEAR_ERRORS:
            return {
                msg: null,
                code: null,
                type: null,
            };
        default:
            return state;
    }
}