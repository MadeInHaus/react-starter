import { configure, addDecorator } from '@storybook/react';
import CenterDecorator from './CenterDecorator';

const req = require.context('../src/components', true, /\.stories\.js$/);

function loadStories() {
    req.keys().forEach(filename => req(filename));
}

addDecorator(CenterDecorator);

configure(loadStories, module);
