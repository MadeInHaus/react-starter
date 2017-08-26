import React from 'react';
import ReactDOM from 'react-dom';

import { Root } from 'components';

const rootEl = document.getElementById('app');

ReactDOM.render(<Root />, rootEl);

if (module.hot) {
    module.hot.accept();
}
