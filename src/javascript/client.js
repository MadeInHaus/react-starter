import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'store/configureStore';
import { Provider } from 'react-redux';

import { App, PathProvider } from 'containers';

const rootEl = document.getElementById('app');
const initialState = window.__INITIAL_STATE__;
const appConfig = window.__APP_CONFIG__;
const store = configureStore(initialState);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <PathProvider assetPaths={appConfig}>
                <App />
            </PathProvider>
        </BrowserRouter>
    </Provider>,
    rootEl
);

if (module.hot) {
    module.hot.accept();
}
