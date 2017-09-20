import React from 'react';
import { node } from 'prop-types';

const ListItem = ({ children, ...props }) =>
    <li {...props}>
        {children}
    </li>;

ListItem.propTypes = {
    children: node,
};

export default ListItem;
