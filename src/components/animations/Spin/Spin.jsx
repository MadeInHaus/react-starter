import React from 'react';
import { node, object } from 'prop-types';
import Transition from 'react-transition-group/Transition';

import './Spin.scss';

const Spin = ({ children, style, ...props }) => {
    return (
        <Transition {...props} timeout={0} appear>
            {status =>
                <div styleName={status} style={style}>
                    {children}
                </div>}
        </Transition>
    );
};

Spin.propTypes = {
    children: node,
    style: object,
};

export default Spin;
