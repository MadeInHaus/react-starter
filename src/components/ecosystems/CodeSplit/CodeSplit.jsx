import React, { Fragment } from 'react';

import { Bundle } from 'common/components';
import { Text } from 'components';
import { FadeTransform } from 'react-animation-components';

const loadMyDep = () =>
    import(/* webpackChunkName: "myDependency" */ './myDep.js');

const CodeSplit = () => (
    <Bundle load={loadMyDep}>
        {myDep => (
            <Fragment>
                <Text theme="headline" tag="h1">
                    Code Split
                </Text>
                <FadeTransform in exit="translateX(10vw)">
                    <Text theme="subhead" tag="p" onClick={myDep}>
                        I animate in once my dependency bundle is loaded.
                    </Text>
                </FadeTransform>
            </Fragment>
        )}
    </Bundle>
);

export default CodeSplit;
