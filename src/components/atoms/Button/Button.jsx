import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'components';
import cx from 'classnames';

import styles from './Button.scss';

const Button = ({ to, href, theme, ...props }) => {
    const classNames = cx(styles.root, {
        [styles.body]: theme === 'body',
    });

    if (to || href) {
        return <Link className={classNames} to={to} href={href} {...props} />;
    }
    return <button className={classNames} {...props} />;
};

Button.propTypes = {
    href: PropTypes.string,
    to: PropTypes.string,
    theme: PropTypes.string,
};

export default Button;
