import { configure, addDecorator } from '@storybook/react';
import StoryRouter from 'storybook-router';
import CenterDecorator from './CenterDecorator';

const req = require.context('../src/components', true, /\.stories\.js$/);

function loadStories() {
    req.keys().forEach(filename => req(filename));
}

addDecorator(CenterDecorator);
addDecorator(StoryRouter());

configure(loadStories, module);
