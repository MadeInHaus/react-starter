import React from 'react';
import { string } from 'prop-types';
import './SvgIcon.scss';

import icons from './icons';

const SvgIcon = ({ iconType, tag }) => {
    return React.createElement(`${tag}`, {
        className: 'icon',
        dangerouslySetInnerHTML: { __html: icons[iconType] },
    });
};

SvgIcon.defaultProps = {
    tag: 'span'
}

SvgIcon.propTypes = {
    iconType: string,
    tag: string,
};

export default SvgIcon;
