import { Record } from 'immutable';
import { actionTypes } from 'constants';

const AppState = new Record({
    authenticate: false,
});

function appReducer(state = AppState, action) {
    const cases = {
        [actionTypes.USER_LOGIN]: () => state.set('authenticated', true),
        default: () => state,
    };

    return (cases[action] || cases.default)();
}

export default appReducer;
