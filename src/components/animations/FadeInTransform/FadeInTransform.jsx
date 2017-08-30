import React from 'react';
import { node, string, object } from 'prop-types';

import { FadeIn, TweenTransform } from 'components';

const FadeInTransform = ({
    children,
    fadeStyle,
    start,
    finish,
    transformStyle,
    ...props
}) => {
    return (
        <FadeIn {...props} style={fadeStyle}>
            <TweenTransform
                {...props}
                start={start}
                finish={finish}
                style={transformStyle}
            >
                {children}
            </TweenTransform>
        </FadeIn>
    );
};

FadeInTransform.propTypes = {
    children: node,
    fadeStyle: object,
    start: string,
    finish: string,
    transformStyle: object,
};

export default FadeInTransform;
