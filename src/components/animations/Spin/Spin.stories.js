import React from 'react';
import { storiesOf } from '@storybook/react';
import { CenterComponent } from 'common/components';

import { Spin } from 'components';

storiesOf('Animations/Spin', module).add('default', () =>
    <CenterComponent>
        <Spin>
            <h1>Example</h1>
        </Spin>
    </CenterComponent>
);
