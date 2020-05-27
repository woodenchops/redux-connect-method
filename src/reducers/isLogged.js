import * as actionType from '../actions/actionTypes';

const isLoggedReducer = (state = false, action) => {
    switch(action.type) {
        case actionType.SIGN_UP:
            return state = !state;  
        default:
            return state;  
    };
};

export default isLoggedReducer;