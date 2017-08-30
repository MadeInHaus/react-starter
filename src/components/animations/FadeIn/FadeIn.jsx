import React from 'react';
import { node, object } from 'prop-types';
import Transition from 'react-transition-group/Transition';

import './FadeIn.scss';

const FadeIn = ({ children, style, ...props }) => {
    return (
        <Transition timeout={500} appear {...props}>
            {status =>
                <div styleName={`fade-in ${status}`} style={style}>
                    {children}
                </div>}
        </Transition>
    );
};

FadeIn.propTypes = {
    children: node,
    style: object,
};

export default FadeIn;
