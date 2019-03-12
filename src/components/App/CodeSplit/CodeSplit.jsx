import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import { Bundle } from 'containers';
import { Text } from 'ui';
import { FadeTransform } from 'react-animation-components';

const loadMyDep = () =>
    import(/* webpackChunkName: "myDependency" */ './myDep.js');

function CodeSplit() {
    return (
        <Fragment>
            <Helmet>
                <title>Code split example | HAUS React Starter</title>
            </Helmet>
            <Bundle load={loadMyDep}>
                {myDep => (
                    <FadeTransform in timeout={0}>
                        <Text theme="headline" tag="h1">
                            Code Splitting
                        </Text>
                        <Text tag="p" onClick={myDep}>
                            I fade in once my dependency is loaded.
                        </Text>
                        <Text theme="subheadline">
                            👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍
                            👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍
                            👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍
                            👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍
                            👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍
                            👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍
                            👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍
                            👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 ❤️
                        </Text>
                    </FadeTransform>
                )}
            </Bundle>
        </Fragment>
    );
}

export default CodeSplit;
