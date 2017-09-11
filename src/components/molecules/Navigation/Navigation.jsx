import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Navigation.scss';

export default class Navigation extends Component {
    render() {
        return (
            <nav className={styles.wrapper}>
                <NavLink exact to="/" activeClassName={styles.selected}>
                    Home
                </NavLink>
                <NavLink to="/about" activeClassName={styles.selected}>
                    About
                </NavLink>
                <NavLink to="/contact" activeClassName={styles.selected}>
                    Contact
                </NavLink>
                <NavLink
                    to="/makejavascriptgreatagain"
                    activeClassName={styles.selected}
                >
                    404
                </NavLink>
                <NavLink
                    to="https://github.com/MadeInHaus/react-redux-webpack-starter"
                    target="_blank"
                >
                    Github
                </NavLink>
            </nav>
        );
    }
}
