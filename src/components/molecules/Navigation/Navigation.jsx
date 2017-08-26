import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Navigation extends React.Component {
    render() {
        return (
            <div>
                <NavLink to="/" className="logo" activeClassName="selected">
                    Home
                </NavLink>
                <NavLink to="/about" activeClassName="selected">
                    About
                </NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink
                    to="/makejavascriptgreatagain"
                    activeClassName="selected"
                >
                    404
                </NavLink>
                <NavLink
                    to="https://github.com/MadeInHaus/react-flux-gulp-starter"
                    target="_blank"
                >
                    Github
                </NavLink>
            </div>
        );
    }
}
