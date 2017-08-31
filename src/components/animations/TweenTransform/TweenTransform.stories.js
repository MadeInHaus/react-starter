import React from 'react';
import { storiesOf } from '@storybook/react';

import { TweenTransform } from 'components';

storiesOf('Animations/TweenTransform', module)
    .add('default', () =>
        <TweenTransform in>
            <h1>Example</h1>
        </TweenTransform>
    )
    .add('from left', () =>
        <TweenTransform in start="translateX(-5em)">
            <h1>Example</h1>
        </TweenTransform>
    )
    .add('from right', () =>
        <TweenTransform in start="translateX(5em)">
            <h1>Example</h1>
        </TweenTransform>
    )
    .add('from top', () =>
        <TweenTransform in start="translateY(-5em)">
            <h1>Example</h1>
        </TweenTransform>
    )
    .add('diagonal', () =>
        <TweenTransform in start="translate(5em, 5em)">
            <h1>Example</h1>
        </TweenTransform>
    )
    .add('flip', () =>
        <TweenTransform in start="rotateX(0)" finish="rotateX(360deg)">
            <h1>Example</h1>
        </TweenTransform>
    )
    .add('scale in', () =>
        <TweenTransform in start="scale(1.5)" finish="scale(1)">
            <h1>Example</h1>
        </TweenTransform>
    )
    .add('scale out', () =>
        <TweenTransform in start="scale(0.5)" finish="scale(1)">
            <h1>Example</h1>
        </TweenTransform>
    );
