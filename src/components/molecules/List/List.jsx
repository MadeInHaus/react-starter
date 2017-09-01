import React from 'react';
import { bool, node } from 'prop-types';

const List = ({ children, ordered, ...props }) => {
    if (ordered) {
        return (
            <ol {...props}>
                {children}
            </ol>
        );
    }

    return (
        <ul {...props}>
            {children}
        </ul>
    );
};

List.propTypes = {
    children: node,
    ordered: bool,
};

export default List;
