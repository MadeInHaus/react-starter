import React from 'react';
import { storiesOf } from '@storybook/react';

import Link from '@ui/Link/Link';

storiesOf('Global/Link', module)
    .add('default', () => <Link href="http://www.google.com">Example</Link>)
    .add('router (link)', () => <Link to="/someroute">Example</Link>)
    .add('router (navlink)', () => (
        <Link to="/someroute" activeClassName="active">
            Example
        </Link>
    ));
