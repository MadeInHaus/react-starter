import React from 'react';
import { Link } from 'components';

import styles from './Navigation.scss';

export default class Navigation extends React.Component {
    render() {
        return (
            <div>
                <Link to="/" activeClassName={styles.active} exact>
                    Home
                </Link>
                <Link to="/about" activeClassName={styles.active} exact>
                    About
                </Link>
                <Link to="/contact" activeClassName={styles.active} exact>
                    Contact
                </Link>
                <Link to="/notfound" activeClassName={styles.active} exact>
                    404
                </Link>
                <Link
                    href="https://github.com/MadeInHaus/react-redux-webpack-starter"
                    target="_blank"
                >
                    Github
                </Link>
            </div>
        );
    }
}
