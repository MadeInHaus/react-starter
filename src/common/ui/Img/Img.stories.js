import React from 'react';
import { storiesOf } from '@storybook/react';

import { Img, ImgPreload } from '@ui';

storiesOf('Global/Img', module)
    .add('default', () => (
        <Img src="https://dummyimage.com/300x200/2f69c6/fff" />
    ))
    .add('preload', () => (
        <ImgPreload src="https://dummyimage.com/500x300/2f69c6/fff" />
    ))
    .add('preload (custom loader)', () => (
        <ImgPreload
            src="https://dummyimage.com/600x400/2f69c6/fff"
            loader={<div>Loading!</div>}
        />
    ));
