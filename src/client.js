import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from 'store/configureStore';
const store = configureStore();

import { Root } from 'components';

const rootEl = document.getElementById('app');

function render(RootComponent) {
    ReactDOM.render(<RootComponent store={store} />, rootEl);
}

render(Root);

if (module.hot) {
    module.hot.accept('components', () => {
        console.info('Hot-Reloading App');
        const NextRoot = require('components').Root;
        render(NextRoot);
    });
}
