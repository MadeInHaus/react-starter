import React from 'react';
import { storiesOf } from '@storybook/react';

import { Stagger, FadeInOut } from 'components';

const data = [
    'Example',
    'Example',
    'Example',
    'Example',
    'Example',
    'Example',
    'Example',
    'Example',
    'Example',
    'Example',
];

storiesOf('Animations/Stagger', module)
    .add('default', () => (
        <Stagger>
            {data.map(str => (
                <FadeInOut>
                    <h4>{str}</h4>
                </FadeInOut>
            ))}
        </Stagger>
    ))
    .add('slow delay', () => (
        <Stagger delay={1000}>
            {data.map(str => (
                <FadeInOut>
                    <h4>{str}</h4>
                </FadeInOut>
            ))}
        </Stagger>
    ))
    .add('chunks of 5', () => (
        <Stagger chunk={5}>
            {data.map(str => (
                <FadeInOut>
                    <h4>{str}</h4>
                </FadeInOut>
            ))}
        </Stagger>
    ));
