import { Record } from 'immutable';
import { actionTypes } from 'constants';

const AppState = {};

function appReducer(state = AppState, action) {
    const cases = {
        default: () => state,
    };

    return (cases[action] || cases.default)();
}

export default appReducer;
