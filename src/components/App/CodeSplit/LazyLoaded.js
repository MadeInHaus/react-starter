import React from 'react';
import Text from '@ui/Text/Text';
import { FadeTransform } from 'react-animation-components';

const LazyLoaded = () =>
    console.log('Lazy loaded 👏') || (
        <FadeTransform in timeout={60}>
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
        </FadeTransform>
    );

export default LazyLoaded;
