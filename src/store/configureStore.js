import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from 'reducers';

const logger = createLogger();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const getMiddleware = () => {
    const middlewares = [thunk];

    if (process.env.NODE_ENV !== 'production') {
        middlewares.push(logger);
    }

    return middlewares;
};

const createStoreWithMiddleware = composeEnhancers(
    applyMiddleware(...getMiddleware())
)(createStore);

export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(rootReducer, initialState);
    if (module.hot) {
        // Enable webpack hot module replacement for reducers
        module.hot.accept('reducers', () => {
            console.info('Reloading Reducers');
            const nextReducer = require('reducers/index').default;
            store.replaceReducer(nextReducer);
        });
    }
    return store;
}
