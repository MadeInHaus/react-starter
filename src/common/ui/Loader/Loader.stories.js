import React from 'react';
import { storiesOf } from '@storybook/react';

import { Loader } from '@ui';

storiesOf('Global/Loader', module).add('default', () => (
    <Loader src="https://placeimg.com/640/480/animals" />
));
