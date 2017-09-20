import React from 'react';

const styles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
};

export default storyFn => <div style={styles}>{storyFn()}</div>;
