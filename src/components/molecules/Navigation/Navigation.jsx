import React from 'react';
import { Link } from 'components';

export default class Navigation extends React.Component {
    render() {
        return (
            <div>
                <Link to="/" className="logo" activeClassName="selected">
                    Home
                </Link>
                <Link to="/about" activeClassName="selected">
                    About
                </Link>
                <Link to="/contact">Contact</Link>
                <Link to="/makejavascriptgreatagain" activeClassName="selected">
                    404
                </Link>
                <Link
                    href="https://github.com/MadeInHaus/react-flux-gulp-starter"
                    target="_blank"
                >
                    Github
                </Link>
            </div>
        );
    }
}
