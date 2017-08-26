import React from 'react';
import { node, string, object } from 'prop-types';

import { FadeIn, TweenTransform } from 'components';

const FadeInTransform = ({
    children,
    fadeStyle,
    from,
    to,
    transformStyle,
    ...props
}) => {
    return (
        <FadeIn {...props} style={fadeStyle}>
            <TweenTransform
                {...props}
                from={from}
                to={to}
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
    from: string,
    to: string,
    transformStyle: object,
};

export default FadeInTransform;
