// store.js file is for stroing and creating the redux store

import {createStore, applyMiddleware} from 'redux';
import rootReducer from './rootReducer';
import logger from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk'; 

// createStore function takes reducer as argument
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(logger,thunk))
);

export default store;