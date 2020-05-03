import { GET_ERRORS, CLEAR_ERRORS } from '../config/type';

// RETURN ERRORS
export const returnErrors = (msg) => {
    return {
        type: GET_ERRORS,
        payload: { msg }
    };
};

// CLEAR ERRORS
export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS
    };
};