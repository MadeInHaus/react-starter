import React from 'react';
import { storiesOf } from '@storybook/react';

import { Loader } from '@ui';

storiesOf('Global/Loader', module)
    .addParameters({ percy: { skip: true } })
    .add('default', () => (
        <Loader src="https://placeimg.com/640/480/animals" />
    ));
