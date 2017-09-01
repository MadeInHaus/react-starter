import React from 'react';
import { bool, node } from 'prop-types';

import './List.scss';

const List = ({ children, ordered, ...props }) => {
    if (ordered) {
        return (
            <ol styleName="root" {...props}>
                {children}
            </ol>
        );
    }

    return (
        <ul styleName="root" {...props}>
            {children}
        </ul>
    );
};

List.propTypes = {
    children: node,
    ordered: bool,
};

export default List;
