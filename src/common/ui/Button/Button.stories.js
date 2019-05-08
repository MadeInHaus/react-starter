import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, number } from '@storybook/addon-knobs';

import { Button } from '@ui';

storiesOf('Global/Button', module)
    .add('default', () => (
        <Button
            onClick={action('Button Clicked')}
            disabled={boolean('Disabled', false)}
        >
            {text('Label', 'Example')} {number('Number', 89)}
        </Button>
    ))
    .add('primary', () => (
        <Button onClick={action('Button Clicked')} primary>
            Example
        </Button>
    ))
    .add('Link (href)', () => (
        <Button href="http://www.google.com">Google</Button>
    ))
    .add('Link (router)', () => <Button to="/some-route">Router Link</Button>);
