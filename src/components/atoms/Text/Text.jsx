import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './Text.scss';

const Text = ({ children, className, tag, theme, ...props }) => {
    const TagName = tag;
    const classNames = cx({
        [className]: className,
        [styles.display]: theme === 'display',
        [styles.subhead]: theme === 'subhead',
        [styles.body]: theme === 'body',
    });
    return (
        <TagName {...props} className={classNames}>
            {children}
        </TagName>
    );
};

Text.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    tag: PropTypes.string,
    theme: PropTypes.string,
};

Text.defaultProps = {
    tag: 'span',
    className: null,
    theme: 'body',
};

export default Text;
