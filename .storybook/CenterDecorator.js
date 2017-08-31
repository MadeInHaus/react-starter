import React from 'react';

const styles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
};

export default storyFn =>
    <div style={styles}>
        {storyFn()}
    </div>;
