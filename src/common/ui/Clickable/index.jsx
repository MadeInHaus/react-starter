import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@ui';
import cx from 'classnames';

import styles from './Clickable.scss';

const Clickable = ({ className, href, theme, to, ...props }) => {
    const classNames = cx(styles.root, className, styles[theme]);

    if (to || href) {
        return (
            <Link {...props} className={classNames} to={to} href={href}>
                <span>{props.children}</span>
            </Link>
        );
    }
    return (
        <button {...props} className={classNames}>
            <span>{props.children}</span>
        </button>
    );
};

Clickable.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    href: PropTypes.string,
    theme: PropTypes.oneOf(['primary', 'secondary']),
    to: PropTypes.string,
};

Clickable.defaultProps = {
    className: null,
    href: null,
    theme: 'primary',
    to: null,
};

export default Clickable;
