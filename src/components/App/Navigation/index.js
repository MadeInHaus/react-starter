import React from 'react';
import { Clickable, SvgIcon } from '@ui';

import styles from './Navigation.scss';

const Navigation = () => (
    <nav className={styles.root}>
        <span>
            <Clickable
                exact
                to="/"
                activeClassName={styles.selected}
                className={styles.logo}
            >
                // React Starter
            </Clickable>
        </span>
        <span>
            <Clickable
                to="/code-split"
                theme="body"
                activeClassName={styles.selected}
                className={styles.link}
            >
                Code Splitting
            </Clickable>
            <Clickable
                to="/makejavascriptgreatagain"
                theme="body"
                activeClassName={styles.selected}
                className={styles.link}
            >
                404
            </Clickable>
            <Clickable
                href="https://github.com/MadeInHaus/react-redux-webpack-starter"
                target="_blank"
                rel="noopener noreferrer"
                theme="body"
                className={styles.link}
            >
                <SvgIcon iconType="github" />
            </Clickable>
        </span>
    </nav>
);

export default Navigation;
