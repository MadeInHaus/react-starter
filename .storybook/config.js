import {
    configure,
    addDecorator,
    addParameters,
    getStorybook,
    setAddon,
} from '@storybook/react';
import StoryRouter from 'storybook-router';
import AppDecorator from './AppDecorator';
import { withKnobs } from '@storybook/addon-knobs';
import createPercyAddon from '@percy-io/percy-storybook';

import '../src/common/theme/elements.scss';
import '../src/common/theme/fonts.scss';
import '../src/common/theme/root.scss';
import '../src/common/theme/text.scss';

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /\.stories\.js$/);
function loadStories() {
    req.keys().forEach(filename => req(filename));
}
addParameters({
    viewport: {
        viewports: {
            small: {
                name: 'mobile',
                styles: {
                    width: '375px',
                    height: '800px',
                },
            },
            large: {
                name: 'desktop',
                styles: {
                    width: '1280px',
                    height: '800px',
                },
            },
        },
    },
});
addDecorator(withKnobs);
addDecorator(AppDecorator);
addDecorator(StoryRouter());
const { percyAddon, serializeStories } = createPercyAddon();
setAddon(percyAddon);
configure(loadStories, module);
serializeStories(getStorybook);
