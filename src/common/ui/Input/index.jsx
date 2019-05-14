import React from 'react';
import { string } from 'prop-types';
import cx from 'classnames';

import { Clickable } from '@ui';

import styles from './Input.scss';

const Input = ({ type, ...props }) => {
    switch (type) {
        case 'select':
            return (
                <select className={cx(styles.root, styles.select)} {...props} />
            );
        case 'textarea':
            return (
                <textarea
                    className={cx(styles.root, styles.textarea)}
                    {...props}
                />
            );
        case 'submit':
        case 'button':
            return <Clickable theme="primary" {...props} />;
        default:
            return <input type={type} className={styles.root} {...props} />;
    }
};

Input.propTypes = {
    type: string,
};

Input.defaultProps = {
    type: 'text',
};

export default Input;
