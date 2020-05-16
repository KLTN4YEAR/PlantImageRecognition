import { SEARCH_PLANT } from '../config/type';

const INITIAL_STATE = {
    plants: []
};

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SEARCH_PLANT:
            console.log('re', action.payload)
            return {
                ...state,
                plants: action.payload
            }
        default:
            return state;
    }
}