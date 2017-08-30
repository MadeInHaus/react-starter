import React from 'react';
import { node, object, string } from 'prop-types';
import Transition from 'react-transition-group/Transition';

import './TweenTransform.scss';

const TweenTransform = ({
    children,
    from = 'translateY(5em)',
    style,
    to = 'translateY(0)',
    ...props
}) => {
    const pos = {
        entering: from,
        entered: to,
        exiting: to,
        exited: from,
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
    from: string,
    style: object,
    to: string,
};

export default TweenTransform;
