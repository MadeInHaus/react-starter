import React from 'react';
import { string } from 'prop-types';
import styles from './SvgIcon.scss';

import icons from './icons';

const SvgIcon = ({ iconType, tag, ...props }) => {
    const TagName = tag;
    return (
        <TagName
            {...props}
            className={styles.root}
            dangerouslySetInnerHTML={{ __html: icons[iconType] }}
        />
    );
};

SvgIcon.defaultProps = {
    tag: 'span',
};

SvgIcon.propTypes = {
    iconType: string.isRequired,
    tag: string,
};

export default SvgIcon;
