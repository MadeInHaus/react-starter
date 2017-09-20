import React from 'react';
import { bool, string } from 'prop-types';
import { Link } from 'components';
import cx from 'classnames';

import './Button.scss';

const Button = ({ to, href, primary, ...props }) => {
    const styleNames = cx('root', {
        primary,
    });

    if (to || href) {
        return <Link styleName={styleNames} to={to} href={href} {...props} />;
    }
    return <button styleName={styleNames} {...props} />;
};

Button.propTypes = {
    href: string,
    primary: bool,
    to: string,
};

export default Button;
