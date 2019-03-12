const initialState = {};

function appReducer(state = initialState, action) {
    const cases = {
        default: () => state,
    };

    return (cases[action.type] || cases.default)(action.payload);
}

export default appReducer;
