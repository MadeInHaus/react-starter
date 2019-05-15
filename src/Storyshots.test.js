import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';

const storybookUrl = 'http://localhost:9001';

const macChromeUserAgent =
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36';

const testDevices = [
    {
        name: 'Mobile 375x800',
        userAgent: macChromeUserAgent,
        viewport: {
            width: 375,
            height: 800,
        },
    },
    {
        name: 'Desktop 1280x800',
        userAgent: macChromeUserAgent,
        viewport: {
            width: 1280,
            height: 800,
        },
    },
];

function createCustomizePage(device) {
    return function(page) {
        return page.emulate(device);
    };
}
const beforeScreenshot = (page, { context: { kind, story }, url }) => {
    return new Promise(resolve =>
        setTimeout(() => {
            resolve();
        }, 600)
    );
};

// npm run screenshot:local: takes screenshots with the local storyshots-puppeteer
if (process.env.NODE_ENV === 'screenshot') {
    testDevices.map(device => {
        const customizePage = createCustomizePage(device);
        initStoryshots({
            storyKindRegex: /^((?!Global\/Loader).)*$/, // skip loader screenshot since it is always moving
            suite: `Image storyshots: ${device.name}`,
            test: imageSnapshot({
                storybookUrl,
                customizePage,
                beforeScreenshot,
            }),
        });
    });
}

// npm run test: creates a snapshot of all stories
if (process.env.NODE_ENV === 'test') {
    initStoryshots();
}
