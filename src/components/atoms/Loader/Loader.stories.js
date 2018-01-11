import React from 'react';
import { storiesOf } from '@storybook/react';

import { Loader } from 'components';

storiesOf('Global/Loader', module).add('default', () => (
    <Loader src="https://placeimg.com/640/480/animals" />
));
