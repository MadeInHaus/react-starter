import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, number } from '@storybook/addon-knobs';

import { LinkTest } from 'ui';

storiesOf('Global/Button', module)
    .add('default', () => (
        <LinkTest
            onClick={action('Link Clicked')}
            disabled={boolean('Disabled', false)}
        >
            {text('Label', 'Example')} {number('Number', 89)}
        </LinkTest>
    ))
    .add('primary', () => (
        <LinkTest onClick={action('Link Clicked')} primary>
            Example
        </LinkTest>
    ))
    .add('Link (href)', () => (
        <LinkTest href="http://www.google.com">Google</LinkTest>
    ))
    .add('Link (router)', () => (
        <LinkTest to="/some-route">Router Link</LinkTest>
    ));
