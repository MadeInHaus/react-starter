import React from 'react';
import { string } from 'prop-types';

import './Img.scss';

const Img = ({ ...props }) => {
    return <img {...props} />;
};

Img.propTypes = {
    src: string.isRequired,
};

export default Img;
