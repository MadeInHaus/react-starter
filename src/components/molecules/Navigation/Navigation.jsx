import React from 'react';
import { Link } from 'components';

import styles from './Navigation.scss';

const Navigation = () => (
    <nav styleName="root">
        <Link exact to="/" activeClassName={styles.selected}>
            Home
        </Link>
        <Link to="/about" activeClassName={styles.selected}>
            About
        </Link>
        <Link to="/code-split" activeClassName={styles.selected}>
            Code Split
        </Link>
        <Link to="/contact" activeClassName={styles.selected}>
            Contact
        </Link>
        <Link to="/makejavascriptgreatagain" activeClassName={styles.selected}>
            404
        </Link>
        <Link
            to="https://github.com/MadeInHaus/react-redux-webpack-starter"
            target="_blank"
        >
            Github
        </Link>
    </nav>
);

export default Navigation;
