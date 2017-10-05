import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, number, text } from '@storybook/addon-knobs';

import { TweenTransform } from 'components';

storiesOf('Animations/TweenTransform', module)
    .addDecorator(withKnobs)
    .add('default', () => (
        <TweenTransform
            in={boolean('in', true)}
            start={text('start', 'translateY(-5em)')}
            finish={text('finish', 'translateY(0)')}
            delay={text('delay', '0ms')}
            duration={text('duration', '500ms')}
            timingFn={text('timingFn', 'ease-in-out')}
            timeout={number('timeout', 500)}
        >
            <h1>Example</h1>
        </TweenTransform>
    ));
