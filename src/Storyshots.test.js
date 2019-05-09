import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';
import pupDevices from 'puppeteer/DeviceDescriptors';

const storybookUrl = 'http://localhost:9001';

const macChromeUserAgent =
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36';

const testDevices = [
    pupDevices['iPhone X'],
    pupDevices.iPad,
    pupDevices['iPad landscape'],
    {
        name: 'Desktop 1440x900',
        userAgent: macChromeUserAgent,
        viewport: {
            width: 1440,
            height: 900,
        },
    },
];

function createCustomizePage(pupDevice) {
    return function(page) {
        return page.emulate(pupDevice);
    };
}

testDevices.map(device => {
    const customizePage = createCustomizePage(device);
    initStoryshots({
        storyKindRegex: /Screenshot/,
        suite: `Image storyshots: ${device.name}`,
        test: imageSnapshot({
            storybookUrl,
            customizePage,
        }),
    });
});
