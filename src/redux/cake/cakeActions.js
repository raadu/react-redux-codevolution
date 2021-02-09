import {
    BUY_CAKE,
    ADD_CAKE,
} from './cakeTypes';

// Action creators list. All action creator functions are listed here.

// buy_cake action creator
// function that returns an action object
export const buy_cake = () => {
    return {
        type: BUY_CAKE
    }
}

// add_cake action creator
export const add_cake = () => {
    return {
        type: ADD_CAKE
    }
}