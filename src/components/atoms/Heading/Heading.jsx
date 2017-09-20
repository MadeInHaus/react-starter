import React from 'react';
import { node, number } from 'react';
import clamp from 'lodash/clamp';

import style from './Heading.scss';

const Heading = ({ children, size, ...props }) => {
    size = clamp(size, 1, 6);
    return React.createElement(
        `h${size}`,
        {
            ...props,
            className: style[`heading${size}`],
        },
        children
    );
};

Heading.propTypes = {
    children: node,
    size: number,
};

Heading.defaultProps = {
    size: 1,
};

export default Heading;
