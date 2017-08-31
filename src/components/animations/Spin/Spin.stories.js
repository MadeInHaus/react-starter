import React from 'react';
import { storiesOf } from '@storybook/react';

import { Spin } from 'components';

storiesOf('Animations/Spin', module).add('default', () =>
    <Spin>
        <h1>Example</h1>
    </Spin>
);
