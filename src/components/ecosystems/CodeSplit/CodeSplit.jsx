import React from 'react';

import { Bundle } from 'common/components';
import { FadeTransform } from 'react-animation-components';

const loadMyDep = () =>
    import(/* webpackChunkName: "myDependency" */ './myDep.js');

const CodeSplit = () => (
    <Bundle load={loadMyDep}>
        {myDep => (
            <div>
                <h1>Code Split</h1>
                <FadeTransform in exit="translateX(10vw)">
                    <p onClick={myDep}>
                        I animate in once my dependency bundle is loaded.
                    </p>
                </FadeTransform>
            </div>
        )}
    </Bundle>
);

export default CodeSplit;
