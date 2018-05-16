import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from 'store/configureStore';

const store = configureStore();

import { Root } from 'components';

export const init = {
    render(RootComponent) {
        const rootEl = document.getElementById('app');

        if (rootEl) {
            ReactDOM.render(<RootComponent store={store} />, rootEl);
        }
    },
};

init.render(Root);

if (module.hot) {
    module.hot.accept('components', () => init.render(Root));
}
