import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';

import { Clickable } from '@ui';

storiesOf('Global/Clickable--SS', module)
    .add('default', () => (
        <Clickable
            onClick={action('Clickable Clicked')}
            disabled={boolean('Disabled', false)}
        >
            {text('Label', 'Example')}
        </Clickable>
    ))
    .add('secondary', () => (
        <Clickable
            onClick={action('Clickable Clicked')}
            theme="secondary"
            disabled={boolean('Disabled', false)}
        >
            Example
        </Clickable>
    ))
    .add('Link (href)', () => (
        <Clickable href="http://www.google.com">Google</Clickable>
    ))
    .add('Link (router)', () => <Clickable to="/">Router Link</Clickable>);
