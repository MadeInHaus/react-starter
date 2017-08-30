import React from 'react';
import { node, object, string } from 'prop-types';
import Transition from 'react-transition-group/Transition';

import './TweenTransform.scss';

const TweenTransform = ({
    children,
    start = 'translateY(5em)',
    style,
    finish = 'translateY(0)',
    ...props
}) => {
    const pos = {
        entering: start,
        entered: finish,
        exiting: finish,
        exited: start,
    };

    return (
        <Transition timeout={500} appear {...props}>
            {status =>
                <div
                    styleName="tween-transform"
                    style={{
                        ...style,
                        transform: pos[status],
                    }}
                >
                    {children}
                </div>}
        </Transition>
    );
};

TweenTransform.propTypes = {
    children: node,
    start: string,
    style: object,
    finish: string,
};

export default TweenTransform;
