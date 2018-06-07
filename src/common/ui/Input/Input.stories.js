import React from 'react';
import { storiesOf } from '@storybook/react';

import { Input } from 'ui';

storiesOf('Global/Input', module)
    .add('default', () => <Input />)
    .add('button (Button)', () => <Input type="button">Click Me</Input>)
    .add('checkbox', () => <Input type="checkbox" />)
    .add('radio', () => <Input type="radio" />)
    .add('select', () => (
        <Input type="select">
            <option>Example 1</option>
            <option>Example 2</option>
            <option>Example 3</option>
            <option>Example 4</option>
        </Input>
    ))
    .add('submit (Button)', () => <Input type="submit">Submit</Input>)
    .add('textarea', () => <Input type="textarea" />);
