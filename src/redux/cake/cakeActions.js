import {
    BUY_CAKE,
    ADD_CAKE,
} from './cakeTypes';

// Action creators list. All action creator functions are listed here.

// buy_cake action creator
// function that returns an action object
export const buy_cake = (cakeNumber = 1) => {
    return {
        type: BUY_CAKE,
        payload: cakeNumber
    }
}

// add_cake action creator
export const add_cake = (cakeNumber = 1) => {
    return {
        type: ADD_CAKE,
        payload: cakeNumber
    }
}