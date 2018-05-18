import React from 'react';
import { Link, SvgIcon } from 'components';

import styles from './Navigation.scss';

const Navigation = () => (
    <nav className={styles.root}>
        <span>
            <Link
                exact
                to="/"
                activeClassName={styles.selected}
                className={styles.logo}
            >
                //
            </Link>
        </span>
        <span>
            <Link
                to="/code-split"
                activeClassName={styles.selected}
                className={styles.link}
            >
                Code Splitting
            </Link>
            <Link
                to="/makejavascriptgreatagain"
                activeClassName={styles.selected}
                className={styles.link}
            >
                404
            </Link>
            <Link
                to="https://github.com/MadeInHaus/react-redux-webpack-starter"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
            >
                <SvgIcon iconType="github" />
            </Link>
        </span>
    </nav>
);

export default Navigation;
