import React from 'react';
import { node } from 'prop-types';

const CenterComponent = ({ children }) =>
    <div
        style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
        }}
    >
        {children}
    </div>;

CenterComponent.propTypes = {
    children: node,
};

export default CenterComponent;
