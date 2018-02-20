import React from 'react';
import { string } from 'prop-types';
import styles from './SvgIcon.scss';

import icons from './icons';

const SvgIcon = ({ iconType, tag }) => {
    return React.createElement(`${tag}`, {
        className: styles.root,
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
