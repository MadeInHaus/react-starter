import React from 'react';
import { storiesOf } from '@storybook/react';

import { FadeIn } from 'components';

storiesOf('Animations/FadeIn', module)
    .add('default', () =>
        <FadeIn in>
            <h1>Example</h1>
        </FadeIn>
    )
    .add('with 2000ms timeout', () =>
        <FadeIn in timeout={2000}>
            <h1>Example</h1>
        </FadeIn>
    );
