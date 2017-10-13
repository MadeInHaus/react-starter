import { Record } from 'immutable';
import { actionTypes } from 'constants';

const appState = new Record();

function appReducer(state = appState, action) {
    const cases = {
        default: () => state,
    };

    return (cases[action.type] || cases.default)(action.payload);
}

export default appReducer;
