import React from 'react';
import { storiesOf } from '@storybook/react';

import { List, ListItem } from 'components';

storiesOf('Global/List and ListItem', module)
    .add('default', () =>
        <List>
            <ListItem>Example</ListItem>
            <ListItem>Example</ListItem>
            <ListItem>Example</ListItem>
            <ListItem>Example</ListItem>
            <ListItem>Example</ListItem>
        </List>
    )
    .add('ordered', () =>
        <List ordered>
            <ListItem>Example</ListItem>
            <ListItem>Example</ListItem>
            <ListItem>Example</ListItem>
            <ListItem>Example</ListItem>
            <ListItem>Example</ListItem>
        </List>
    );
