import React from 'react';
import { string } from 'prop-types';

import { Button } from 'components';

import './Input.scss';

const Input = ({ type, ...props }) => {
    switch (type) {
        case 'select':
            return <select styleName="select" {...props} />;
        case 'textarea':
            return <textarea styleName="textarea" {...props} />;
        case 'submit':
        case 'button':
            return <Button {...props} />;
        default:
            return <input type={type} styleName="root" {...props} />;
    }
};

Input.propTypes = {
    type: string,
};

Input.defaultProps = {
    type: 'text',
};

export default Input;
