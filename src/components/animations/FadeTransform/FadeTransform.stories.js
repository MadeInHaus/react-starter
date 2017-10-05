import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, number, text } from '@storybook/addon-knobs';

import { FadeTransform } from 'components';

storiesOf('Animations/FadeTransform', module)
    .addDecorator(withKnobs)
    .add('default', () => (
        <FadeTransform
            in={boolean('in', true)}
            start={text('start', 'translateY(-5em)')}
            finish={text('finish', 'translateY(0)')}
            timeout={number('timeout', 500)}
            delay={text('delay', '0ms')}
            duration={text('duration', '500ms')}
            timingFn={text('timingFn', 'ease-in-out')}
        >
            <h1>Example</h1>
        </FadeTransform>
    ));
