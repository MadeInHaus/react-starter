import React from 'react';
import { node, object } from 'prop-types';

import './Spin.scss';

const Spin = ({ children, style, ...props }) => {
    return (
        <div styleName="spin" style={style} {...props}>
            {children}
        </div>
    );
};

Spin.propTypes = {
    children: node,
    style: object,
};

export default Spin;
