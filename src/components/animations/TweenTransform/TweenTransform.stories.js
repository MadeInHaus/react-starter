import React from 'react';
import { storiesOf } from '@storybook/react';
import { CenterComponent } from 'common/components';

import { TweenTransform } from 'components';

storiesOf('Animations/TweenTransform', module)
    .add('default', () =>
        <CenterComponent>
            <TweenTransform in>
                <h1>Example</h1>
            </TweenTransform>
        </CenterComponent>
    )
    .add('from left', () =>
        <CenterComponent>
            <TweenTransform in start="translateX(-5em)">
                <h1>Example</h1>
            </TweenTransform>
        </CenterComponent>
    )
    .add('from right', () =>
        <CenterComponent>
            <TweenTransform in start="translateX(5em)">
                <h1>Example</h1>
            </TweenTransform>
        </CenterComponent>
    )
    .add('from top', () =>
        <CenterComponent>
            <TweenTransform in start="translateY(-5em)">
                <h1>Example</h1>
            </TweenTransform>
        </CenterComponent>
    )
    .add('diagonal', () =>
        <CenterComponent>
            <TweenTransform in start="translate(5em, 5em)">
                <h1>Example</h1>
            </TweenTransform>
        </CenterComponent>
    )
    .add('flip', () =>
        <CenterComponent>
            <TweenTransform in start="rotateX(0)" finish="rotateX(360deg)">
                <h1>Example</h1>
            </TweenTransform>
        </CenterComponent>
    )
    .add('scale in', () =>
        <CenterComponent>
            <TweenTransform in start="scale(1.5)" finish="scale(1)">
                <h1>Example</h1>
            </TweenTransform>
        </CenterComponent>
    )
    .add('scale out', () =>
        <CenterComponent>
            <TweenTransform in start="scale(0.5)" finish="scale(1)">
                <h1>Example</h1>
            </TweenTransform>
        </CenterComponent>
    );
