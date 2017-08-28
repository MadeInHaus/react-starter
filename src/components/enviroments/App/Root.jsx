import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'store/configureStore';
import { Provider } from 'react-redux';

import { App } from 'components';

const store = configureStore();

const Root = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    );
};

Root.propTypes = {};

export default Root;
