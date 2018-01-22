import React from 'react';
import { storiesOf } from '@storybook/react';

import { Heading } from 'components';

storiesOf('Global/Heading', module).add('default', () => (
    <div>
        <Heading size={1}>size 1</Heading>
        <Heading size={2}>size 2</Heading>
        <Heading size={3}>size 3</Heading>
        <Heading size={4}>size 4</Heading>
        <Heading size={5}>size 5</Heading>
        <Heading size={6}>size 6</Heading>
    </div>
));
