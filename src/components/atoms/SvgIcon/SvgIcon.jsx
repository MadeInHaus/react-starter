import React from 'react';
import { string } from 'prop-types';
import './SvgIcon.scss';

import icons from './icons';

const SvgIcon = ({ iconType }) => (
    <span
        className="icon"
        dangerouslySetInnerHTML={{ __html: icons[iconType] }}
    />
);

SvgIcon.propTypes = {
    iconType: string,
};

export default SvgIcon;
