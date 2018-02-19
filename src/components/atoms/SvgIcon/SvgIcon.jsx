import React from 'react';
import { string } from 'prop-types';
import './SvgIcon.scss';

import icons from './icons';

const SvgIcon = ({ iconType, tag }) => {
    const elementTag = tag || 'span';
    return React.createElement(`${elementTag}`, {
        className: 'icon',
        dangerouslySetInnerHTML: { __html: icons[iconType] },
    });
};

SvgIcon.propTypes = {
    iconType: string,
    tag: string,
};

export default SvgIcon;
