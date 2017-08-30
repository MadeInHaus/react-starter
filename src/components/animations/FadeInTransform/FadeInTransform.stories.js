import React from 'react';
import { storiesOf } from '@storybook/react';
import { CenterComponent } from 'common/components';

import { FadeInTransform } from 'components';

storiesOf('FadeInTransform', module)
    .add('default', () =>
        <CenterComponent>
            <FadeInTransform in>
                <h1>Example</h1>
            </FadeInTransform>
        </CenterComponent>
    )
    .add('from left', () =>
        <CenterComponent>
            <FadeInTransform in start="translateX(-5em)">
                <h1>Example</h1>
            </FadeInTransform>
        </CenterComponent>
    )
    .add('from right', () =>
        <CenterComponent>
            <FadeInTransform in start="translateX(5em)">
                <h1>Example</h1>
            </FadeInTransform>
        </CenterComponent>
    )
    .add('from top', () =>
        <CenterComponent>
            <FadeInTransform in start="translateY(-5em)">
                <h1>Example</h1>
            </FadeInTransform>
        </CenterComponent>
    )
    .add('diagonal', () =>
        <CenterComponent>
            <FadeInTransform in start="translate(5em, 5em)">
                <h1>Example</h1>
            </FadeInTransform>
        </CenterComponent>
    )
    .add('flip', () =>
        <CenterComponent>
            <FadeInTransform in start="rotateX(0)" finish="rotateX(360deg)">
                <h1>Example</h1>
            </FadeInTransform>
        </CenterComponent>
    )
    .add('scale in', () =>
        <CenterComponent>
            <FadeInTransform in start="scale(1.5)" finish="scale(1)">
                <h1>Example</h1>
            </FadeInTransform>
        </CenterComponent>
    )
    .add('scale out', () =>
        <CenterComponent>
            <FadeInTransform in start="scale(0.5)" finish="scale(1)">
                <h1>Example</h1>
            </FadeInTransform>
        </CenterComponent>
    );
