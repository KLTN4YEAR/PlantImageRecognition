import { GET_ERRORS, CLEAR_ERRORS } from '../config/type';

// RETURN ERRORS
export const returnErrors = (err) => {
    return {
        type: GET_ERRORS,
        payload: { err }
    };
};

// CLEAR ERRORS
export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS
    };
};