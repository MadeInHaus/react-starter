import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button } from 'ui';

storiesOf('Global/Button', module)
    .add('default', () => (
        <Button onClick={action('Button Clicked')}>Example</Button>
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
