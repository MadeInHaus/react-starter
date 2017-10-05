import React from 'react';

import { Bundle } from 'common/components';

const loadMyDep = () =>
    import(/* webpackChunkName: "myDependency" */ './myDep.js');

const CodeSplit = () => (
    <Bundle load={loadMyDep}>
        {myDep => (
            <div>
                <h1>Code Split</h1>
                <p onClick={myDep}>
                    I only render once my dependency bundle is loaded.
                </p>
            </div>
        )}
    </Bundle>
);

export default CodeSplit;
