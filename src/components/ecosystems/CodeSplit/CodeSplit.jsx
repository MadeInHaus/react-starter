import React from 'react';

import { Bundle } from 'common/components';
import { Img, Text } from 'components';
import { FadeTransform } from 'react-animation-components';

const loadMyDep = () =>
    import(/* webpackChunkName: "myDependency" */ './myDep.js');

const CodeSplit = () => (
    <Bundle load={loadMyDep}>
        {myDep => (
            <FadeTransform in timeout={0}>
                <Text theme="headline" tag="h1">
                    Code Splitting
                </Text>
                <Text tag="p" onClick={myDep}>
                    I fade in once my dependency is loaded.
                </Text>
                <Img src="https://media.giphy.com/media/121YQW1OQhqGLS/giphy.gif" />
            </FadeTransform>
        )}
    </Bundle>
);

export default CodeSplit;
