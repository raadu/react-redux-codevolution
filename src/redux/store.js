// store.js file is for stroing and creating the redux store

import {createStore} from 'redux';
import rootReducer from './rootReducer';

// createStore function takes reducer as argument
const store = createStore(rootReducer);

export default store;