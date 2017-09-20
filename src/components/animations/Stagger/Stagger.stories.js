import React from 'react';
import { storiesOf } from '@storybook/react';

import { Stagger, FadeIn } from 'components';

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
    .add('default', () =>
        <Stagger>
            {data.map(str =>
                <FadeIn>
                    <h4>
                        {str}
                    </h4>
                </FadeIn>
            )}
        </Stagger>
    )
    .add('slow delay', () =>
        <Stagger delay={1000}>
            {data.map(str =>
                <FadeIn>
                    <h4>
                        {str}
                    </h4>
                </FadeIn>
            )}
        </Stagger>
    )
    .add('chunks of 5', () =>
        <Stagger chunk={5}>
            {data.map(str =>
                <FadeIn>
                    <h4>
                        {str}
                    </h4>
                </FadeIn>
            )}
        </Stagger>
    );
