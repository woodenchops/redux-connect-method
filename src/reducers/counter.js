import * as actionType from '../actions/actionTypes';

const counterReducer = (state = 0, action) => {
    switch(action.type) {
        case actionType.INCREMENT:
            return state + action.payload;
        case actionType.DECREMENT:
            return state - 1;
        default: 
            return state;
        
    };
};

export default counterReducer;