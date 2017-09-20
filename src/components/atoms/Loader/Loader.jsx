import React from 'react';

import { Spin } from 'components';

import './Loader.scss';

const Loader = () =>
    <div styleName="root">
        <Spin in>
            <div styleName="loader" />
        </Spin>
    </div>;

export default Loader;
