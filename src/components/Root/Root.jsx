import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'store/configureStore';
import { Provider } from 'react-redux';

import { PathProvider } from 'common/components';
import { App } from 'components';

const window = window || {};

const initialState = window.__INITIAL_STATE__;
const appConfig = window.__APP_CONFIG__;
const store = configureStore(initialState);

const Root = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <PathProvider assetPaths={appConfig}>
                    <App />
                </PathProvider>
            </BrowserRouter>
        </Provider>
    );
};

Root.propTypes = {};

export default Root;
