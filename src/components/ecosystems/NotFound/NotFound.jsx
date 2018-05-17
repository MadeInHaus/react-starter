import React from 'react';

import { Text } from 'components';

export default function NotFound() {
    return (
        <div>
            <Text tag="h2" theme="subhead">
                404
            </Text>
            <Text tag="p" theme="body">
                Sorry, the page you requested could not be found.
            </Text>
        </div>
    );
}
