import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { App } from 'components';

import 'normalize.css';
import './Root.scss';

const Root = props => {
    return (
        <Provider store={props.store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    );
};

Root.propTypes = {};

export default Root;
