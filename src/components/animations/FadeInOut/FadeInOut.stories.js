import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, number, text } from '@storybook/addon-knobs';

import { FadeInOut } from 'components';

storiesOf('Animations/FadeInOut', module)
    .addDecorator(withKnobs)
    .add('default', () => (
        <FadeInOut
            in={boolean('in', true)}
            timeout={number('timeout', 500)}
            delay={text('delay', '0ms')}
            duration={text('duration', '500ms')}
            timingFn={text('timingFn', 'ease-in-out')}
        >
            <h1>Example</h1>
        </FadeInOut>
    ));
