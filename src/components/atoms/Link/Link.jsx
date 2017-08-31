import React from 'react';
import { string } from 'prop-types';
import { Link as RouterLink, NavLink } from 'react-router-dom';

import './Link.scss';

const Link = ({ to, activeClassName, ...props }) => {
    if (to) {
        return activeClassName
            ? <NavLink to={to} activeClassName={activeClassName} {...props} />
            : <RouterLink to={to} {...props} />;
    }

    return <a {...props} />;
};

Link.propTypes = {
    to: string,
    activeClassName: string,
};

export default Link;
