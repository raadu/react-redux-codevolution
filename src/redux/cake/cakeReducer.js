import {
    BUY_CAKE,
    ADD_CAKE,
} from './cakeTypes';

// Initial State
const initialState = {
    numOfCakes: 10
};

// Reducer function
// Takes state, action as arguments 
// Returns new state by switching through action.type
const cakeReducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_CAKE: 
            return {
                ...state,
                numOfCakes: state.numOfCakes - parseInt(action.payload)
            };
        case ADD_CAKE: 
            return {
                ...state,
                numOfCakes: state.numOfCakes + parseInt(action.payload)
            };
        default: 
            return state;
    }
}

export default cakeReducer;