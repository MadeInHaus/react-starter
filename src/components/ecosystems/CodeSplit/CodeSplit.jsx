import React, { PureComponent } from 'react';

import { Bundle } from 'common/components';

const loadMyDep = () =>
    import(/* webpackChunkName: "myDependancy" */ './myDep.js');

export default class CodeSplit extends PureComponent {
    render() {
        return (
            <Bundle load={loadMyDep}>
                {myDep => (
                    <h1 onClick={myDep}>
                        I only render once my dependancy bundle is loaded.
                    </h1>
                )}
            </Bundle>
        );
    }
}
