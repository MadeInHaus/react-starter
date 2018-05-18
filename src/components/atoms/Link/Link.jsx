import React from 'react';
import { string } from 'prop-types';
import { Link as RouterLink, NavLink } from 'react-router-dom';

import styles from './Link.scss';

const Link = ({ to, activeClassName, ...props }) => {
    if (to) {
        return activeClassName ? (
            <NavLink
                activeClassName={activeClassName}
                className={styles.root}
                to={to}
                {...props}
            />
        ) : (
            <RouterLink className={styles.root} to={to} {...props} />
        );
    }

    return <a className={styles.root} {...props} />;
};

Link.propTypes = {
    activeClassName: string,
    to: string,
};

export default Link;
