import { configure, addDecorator } from '@storybook/react';
import StoryRouter from 'storybook-router';
import AppDecorator from './AppDecorator';

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /\.stories\.js$/);
function loadStories() {
    req.keys().forEach(filename => req(filename));
}
addDecorator(AppDecorator);
addDecorator(StoryRouter());
configure(loadStories, module);
