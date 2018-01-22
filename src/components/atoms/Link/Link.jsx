import React from 'react';
import { string } from 'prop-types';
import { Link as RouterLink, NavLink } from 'react-router-dom';

import './Link.scss';

const Link = ({ to, activeClassName, ...props }) => {
    if (to) {
        return activeClassName ? (
            <NavLink
                activeClassName={activeClassName}
                styleName="root"
                to={to}
                {...props}
            />
        ) : (
            <RouterLink styleName="root" to={to} {...props} />
        );
    }

    return <a styleName="root" {...props} />;
};

Link.propTypes = {
    activeClassName: string,
    to: string,
};

export default Link;
