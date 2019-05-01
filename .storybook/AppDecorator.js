import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../src/store/';

const store = configureStore();

const AppDecorator = storyFn => {
    return (
        <Provider store={store}>
            <div className="app">{storyFn()}</div>
        </Provider>
    );
};

export default AppDecorator;
