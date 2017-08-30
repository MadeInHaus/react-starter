import React from 'react';
import { storiesOf } from '@storybook/react';
import { CenterComponent } from 'common/components';

import { FadeIn } from 'components';

storiesOf('FadeIn', module)
    .add('default', () =>
        <CenterComponent>
            <FadeIn in>
                <h1>Example</h1>
            </FadeIn>
        </CenterComponent>
    )
    .add('with 2000ms timeout', () =>
        <CenterComponent>
            <FadeIn in timeout={2000}>
                <h1>Example</h1>
            </FadeIn>
        </CenterComponent>
    );
