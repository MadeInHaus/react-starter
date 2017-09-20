import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, number } from '@storybook/addon-knobs';

import { FadeIn } from 'components';

storiesOf('Animations/FadeIn', module)
    .addDecorator(withKnobs)
    .add('default', () => (
        <FadeIn in={boolean('In', true)} timeout={number('Timeout', 0)}>
            <h1>Example</h1>
        </FadeIn>
    ));
