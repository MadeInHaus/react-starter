import React from 'react';
import { storiesOf } from '@storybook/react';

import Img from '@ui/Img';
import ImgPreload from '@ui/Img/ImgPreload';

storiesOf('Global/Img', module)
    .add('default', () => <Img src="https://placeimg.com/640/480/animals" />)
    .add('preload', () => (
        <ImgPreload src="https://placeimg.com/1000/1000/any" />
    ))
    .add('preload (custom loader)', () => (
        <ImgPreload
            src="https://placeimg.com/1000/1000/any"
            loader={<div>Loading!</div>}
        />
    ));
