import React from 'react';
import { string } from 'prop-types';

import { Clickable } from '@ui';

import styles from './Input.scss';

const Input = ({ type, ...props }) => {
    switch (type) {
        case 'select':
            return <select className={styles.select} {...props} />;
        case 'textarea':
            return <textarea className={styles.textarea} {...props} />;
        case 'submit':
        case 'button':
            return <Clickable {...props} />;
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
