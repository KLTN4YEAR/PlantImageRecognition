import { GET_INFO_USER, ERROR_RESPONSE, CLEAN_PROFILE, GET_AVATAR, UPDATE_USER } from '../config/type';
import { auth } from '../config/helper';

const INITIAL_STATE = { profile: {}, message: '', error: '', isFollow: false, avatar: '' };

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_INFO_USER:
            return {...state, profile: action.payload };
        case UPDATE_USER:
            return {...state, profile: action.payload };
        case ERROR_RESPONSE:
            return {...state, error: action.payload };

        case CLEAN_PROFILE:
            return {...state, message: '', error: '', isFollow: false };

        case GET_AVATAR:
            return {...state, avatar: auth.getAvatar() };
        default:
            return state;
    }
}