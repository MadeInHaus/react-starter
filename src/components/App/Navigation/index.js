import React from 'react';
import { Button, SvgIcon } from '@ui';

import styles from './Navigation.scss';

const Navigation = () => (
    <nav className={styles.root}>
        <span>
            <Button
                exact
                to="/"
                activeClassName={styles.selected}
                className={styles.logo}
            >
                // SPA Starter
            </Button>
        </span>
        <span>
            <Button
                to="/code-split"
                theme="body"
                activeClassName={styles.selected}
                className={styles.link}
            >
                Code Splitting
            </Button>
            <Button
                to="/makejavascriptgreatagain"
                activeClassName={styles.selected}
                className={styles.link}
            >
                404
            </Button>
            <Button
                href="https://github.com/MadeInHaus/react-redux-webpack-starter"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
            >
                <SvgIcon iconType="github" />
            </Button>
        </span>
    </nav>
);

export default Navigation;
