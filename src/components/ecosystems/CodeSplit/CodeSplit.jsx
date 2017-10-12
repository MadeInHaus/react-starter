import React from 'react';

import { Bundle } from 'common/components';
import { FadeInOut } from 'react-animation-components';

const loadMyDep = () =>
    import(/* webpackChunkName: "myDependency" */ './myDep.js');

const CodeSplit = () => (
    <Bundle load={loadMyDep}>
        {myDep => (
            <div>
                <h1>Code Split</h1>
                <FadeInOut delay="1s" in>
                    <p onClick={myDep}>
                        I only render once my dependency bundle is loaded.
                    </p>
                </FadeInOut>
            </div>
        )}
    </Bundle>
);

export default CodeSplit;
