import React from 'react';
import { storiesOf } from '@storybook/react';

import { Link } from 'components';

storiesOf('Global/Link', module)
    .add('default (href)', () =>
        <Link href="http://www.google.com">Example</Link>
    )
    .add('router Link', () => <Link to="/someroute">Example</Link>)
    .add('router NavLink', () =>
        <Link to="/someroute" activeClassName="active">
            Example
        </Link>
    );
