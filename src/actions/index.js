import * as actionType from './actionTypes';

export const increment = (num) => {
    return {
        type: actionType.INCREMENT,
        payload: num
    }
};

export const decrement = (num) => {
    return {
        type: actionType.DECREMENT
    }
};

export const toggleLoggedStatus = () => {
    return {
        type: actionType.SIGN_UP
    };
};