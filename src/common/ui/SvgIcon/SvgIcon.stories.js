import React from 'react';
import { storiesOf } from '@storybook/react';

import { SvgIcon } from 'ui';

storiesOf('Global/SvgIcon', module).add('default', () => (
    <div>
        <div style={{ height: '250px', width: '250px' }}>
            <SvgIcon iconType="facebook" tag="div" />
        </div>
        <div style={{ height: '250px', width: '250px' }}>
            <SvgIcon iconType="instagram" tag="div" />
        </div>
        <div style={{ height: '250px', width: '250px' }}>
            <SvgIcon iconType="linkedin" tag="div" />
        </div>
        <div style={{ height: '250px', width: '250px' }}>
            <SvgIcon iconType="twitter" tag="div" />
        </div>
    </div>
));
