import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import Text from '@ui/Text/Text';

export default function NotFound() {
    return (
        <Fragment>
            <Helmet>
                <title>404 | HAUS React Starter</title>
            </Helmet>
            <Text tag="h1" theme="headline">
                💩 404
            </Text>
            <Text tag="p" theme="body">
                Sorry, the page you requested could not be found.
            </Text>
        </Fragment>
    );
}
