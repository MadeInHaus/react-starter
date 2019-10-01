import React, { Fragment } from 'react';
import { Text } from '@ui';

const LazyLoaded = () =>
    console.log('Lazy loaded 👏') || (
        <Fragment>
            <Text theme="headline" tag="h1">
                Code Splitting
            </Text>
            <Text tag="p">
                Leveraging <code>React.lazy</code> and{' '}
                <code>React.Suspense</code>.
            </Text>
            <Text theme="subheadline">
                👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍
                👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍
                👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍
                👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍
                👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍
                👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍 👍
                👍 👍 👍 ❤️
            </Text>
        </Fragment>
    );

export default LazyLoaded;
