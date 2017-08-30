import React from 'react';
import { storiesOf } from '@storybook/react';
import { CenterComponent } from 'common/components';

import { Spin } from 'components';

storiesOf('Spin', module).add('default', () =>
    <CenterComponent>
        <Spin in>
            <h1>Example</h1>
        </Spin>
    </CenterComponent>
);
