import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'components';
import cx from 'classnames';

import styles from './Button.scss';

const Button = ({ className, href, theme, to, ...props }) => {
    const classNames = cx(styles.root, className, styles[theme]);

    if (to || href) {
        return <Link {...props} className={classNames} to={to} href={href} />;
    }
    return <button {...props} className={classNames} />;
};

Button.propTypes = {
    className: PropTypes.string,
    href: PropTypes.string,
    theme: PropTypes.oneOf(Object.keys(styles)),
    to: PropTypes.string,
};

Button.defaultProps = {
    className: null,
    href: null,
    theme: 'body',
    to: null,
};

export default Button;
