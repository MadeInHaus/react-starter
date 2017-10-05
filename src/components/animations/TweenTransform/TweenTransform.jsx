import React from 'react';
import { node, object, string } from 'prop-types';
import Transition from 'react-transition-group/Transition';

import { defaultAnimationProps, getInlineStyles } from '../utilities.js';

import './TweenTransform.scss';

const TweenTransform = ({ children, start, finish, ...props }) => {
    const pos = {
        entering: start,
        entered: finish,
        exiting: finish,
        exited: start,
    };

    return (
        <Transition {...props}>
            {status => (
                <div
                    styleName="root"
                    style={{
                        ...getInlineStyles(props),
                        transform: pos[status],
                    }}
                >
                    {children}
                </div>
            )}
        </Transition>
    );
};

TweenTransform.propTypes = {
    children: node.isRequired,
    start: string,
    style: object,
    finish: string,
};

TweenTransform.defaultProps = {
    ...defaultAnimationProps,
    start: 'translateY(5em)',
    finish: 'translateY(0)',
};

export default TweenTransform;
