import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from 'reducers';

const logger = createLogger();

const getMiddleware = () => {
    const middlewares = [thunk];

    if (process.env.NODE_ENV !== 'production') {
        middlewares.push(logger);
    }

    return middlewares;
};

const createStoreWithMiddleware = applyMiddleware(...getMiddleware())(
    createStore
);

export default function configureStore(initialState) {
    return createStoreWithMiddleware(rootReducer, initialState);
}
