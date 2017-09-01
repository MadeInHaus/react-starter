import React from 'react';
import { node, string, object } from 'prop-types';

import { FadeIn, TweenTransform } from 'components';

const FadeInTransform = ({
    children,
    fadeStyle,
    start,
    finish,
    transformStyle,
    style,
    ...props
}) => {
    return (
        <FadeIn {...props} style={{ ...style, ...fadeStyle }}>
            <TweenTransform
                {...props}
                start={start}
                finish={finish}
                style={{ ...style, ...transformStyle }}
            >
                {children}
            </TweenTransform>
        </FadeIn>
    );
};

FadeInTransform.propTypes = {
    children: node,
    fadeStyle: object,
    finish: string,
    start: string,
    style: object,
    transformStyle: object,
};

export default FadeInTransform;
