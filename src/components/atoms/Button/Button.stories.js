import React from 'react';
import { storiesOf, action } from '@storybook/react';

import { Button } from 'components';

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
