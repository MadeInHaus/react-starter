import React from 'react';
import { string } from 'prop-types';

import './Paragraph.scss';

const Paragraph = ({ ...props }) => <p styleName="root" {...props} />;

Paragraph.propTypes = {
    children: string,
};

export default Paragraph;
