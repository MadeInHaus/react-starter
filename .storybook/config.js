import { configure, addDecorator } from '@storybook/react';
import StoryRouter from 'storybook-router';
import AppDecorator from './AppDecorator';

const req = require.context('../src/components', true, /\.stories\.js$/);

function loadStories() {
    req.keys().forEach(filename => req(filename));
}

addDecorator(AppDecorator);
addDecorator(StoryRouter());

configure(loadStories, module);
