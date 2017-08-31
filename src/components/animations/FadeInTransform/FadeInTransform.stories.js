import React from 'react';
import { storiesOf } from '@storybook/react';

import { FadeInTransform } from 'components';

storiesOf('Animations/FadeInTransform', module)
    .add('default', () =>
        <FadeInTransform in>
            <h1>Example</h1>
        </FadeInTransform>
    )
    .add('from left', () =>
        <FadeInTransform in start="translateX(-5em)">
            <h1>Example</h1>
        </FadeInTransform>
    )
    .add('from right', () =>
        <FadeInTransform in start="translateX(5em)">
            <h1>Example</h1>
        </FadeInTransform>
    )
    .add('from top', () =>
        <FadeInTransform in start="translateY(-5em)">
            <h1>Example</h1>
        </FadeInTransform>
    )
    .add('diagonal', () =>
        <FadeInTransform in start="translate(5em, 5em)">
            <h1>Example</h1>
        </FadeInTransform>
    )
    .add('flip', () =>
        <FadeInTransform in start="rotateX(0)" finish="rotateX(360deg)">
            <h1>Example</h1>
        </FadeInTransform>
    )
    .add('scale in', () =>
        <FadeInTransform in start="scale(1.5)" finish="scale(1)">
            <h1>Example</h1>
        </FadeInTransform>
    )
    .add('scale out', () =>
        <FadeInTransform in start="scale(0.5)" finish="scale(1)">
            <h1>Example</h1>
        </FadeInTransform>
    );
