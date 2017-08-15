import { combineReducers } from 'redux';

/* 
This auto combines and exports reducers. It uses their filename as their key in the store. 
If you want to name them something different you need to import the files individually I.E:

import appReducer from 'reducers/app.js'
import otherReducer from 'reducers/other.js'

export default combineReducers({
    appState: appReducer,
    cats: otherReducer,
});

*/

const req = require.context('.', false, /\.js$/);
const reducers = {};

req.keys().forEach(key => {
    const filename = key.match(/[a-zA-Z]+.js$/)[0];
    const reducerName = filename.split('.')[0];
    const exportFn = req(key).default;

    if (exportFn) {
        reducers[reducerName] = exportFn;
    }
});

export default combineReducers(reducers);
