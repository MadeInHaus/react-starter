import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from 'store';

const store = configureStore();

import Root from './components/Root';

export const init = {
    render(RootComponent) {
        const rootEl = document.getElementById('mount');

        if (rootEl) {
            ReactDOM.render(<RootComponent store={store} />, rootEl);
        }
    },
};

init.render(Root);

if (module.hot) {
    module.hot.accept('./components/Root', () => init.render(Root));
}
