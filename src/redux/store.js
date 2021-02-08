// store.js file is for stroing and creating the redux store

import {createStore} from 'redux';
import cakeReducer from './cake/cakeReducer';

// createStore function takes reducer as argument
const store = createStore(cakeReducer);

export default store;