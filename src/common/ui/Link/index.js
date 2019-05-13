import React from 'react';
import { string } from 'prop-types';
import { Link as RouterLink, NavLink } from 'react-router-dom';

const Link = ({ to, activeClassName, ...props }) => {
    if (to) {
        return activeClassName ? (
            <NavLink activeClassName={activeClassName} to={to} {...props} />
        ) : (
            <RouterLink to={to} {...props} />
        );
    }

    return <a {...props} />;
};

Link.propTypes = {
    activeClassName: string,
    to: string,
};

export default Link;
