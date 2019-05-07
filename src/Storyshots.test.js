import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';
import pupDevices from 'puppeteer/DeviceDescriptors';

const storybookUrl = 'http://localhost:9001';

function createCustomizePage(pupDevice) {
    return function(page) {
        return page.emulate(pupDevice);
    };
}

if (process.env.NODE_ENV === 'test') {
    initStoryshots();
} else if (process.env.NODE_ENV === 'screenshot') {
    const supportedDevices = new Set(['iPhone 8', 'iPad', 'iPad Pro']);

    for (const supportedDevice of supportedDevices) {
        const pupDevice = pupDevices[supportedDevice];

        if (!pupDevice) {
            continue;
        }

        const customizePage = createCustomizePage(pupDevice);

        initStoryshots({
            suite: `Image storyshots: ${pupDevice.name}`,
            test: imageSnapshot({
                storybookUrl,
                customizePage,
            }),
        });
    }
}
