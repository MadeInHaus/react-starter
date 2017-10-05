import React from 'react';
import { bool, node, number, string } from 'prop-types';
import Transition from 'react-transition-group/Transition';

import { defaultAnimationProps, getInlineStyles } from '../utilities.js';
import './FadeInOut.scss';

const FadeInOut = props => {
    return (
        <Transition {...props}>
            {status => (
                <div
                    styleName={`root ${status}`}
                    style={getInlineStyles(props)}
                >
                    {props.children}
                </div>
            )}
        </Transition>
    );
};

FadeInOut.propTypes = {
    appear: bool,
    children: node.isRequired,
    delay: string,
    duration: string,
    timeout: number,
    timingFn: string,
};

FadeInOut.defaultProps = {
    ...defaultAnimationProps,
};

export default FadeInOut;
