import path from 'path';
import express from 'express';
import compression from 'compression';

import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { Provider } from 'react-redux';

import configureStore from 'store/configureStore';
import { App, Html, PathProvider } from 'components';

const debug = require('debug')('Server:');

debug.enabled = true;

const createAppConfig = req => ({
    env: process.env.NODE_ENV || 'local',
    siteUrl: process.env.SITE_URL || `${req.protocol}://${req.hostname}`,
    // Uncomment this code to specify where on S3 remote assets are stored
    // aws: {
    //     bucket: process.env.S3_BUCKET || 'madeinhaus',
    //     bypassCdn: req.query.bypass || false,
    //     cloudfront: process.env.CLOUDFRONT_URL || false,
    //     folder: process.env.S3_PATH || process.env.NODE_ENV || false,
    //     prefix: process.env.S3_PREFIX || 'react-flux-gulp-starter',
    //     urlHash: process.env.URL_HASH || false,
    //     useS3: (process.env.USE_S3 && process.env.USE_S3 !== 'false') || false,
    // },
});

const clientRouter = (req, res) => {
    const context = {};
    const initialState = {};
    const store = configureStore(initialState);
    const appConfig = createAppConfig(req);

    const html = renderToStaticMarkup(
        <Html
            title="React Boiler"
            initialState={store.getState()}
            appConfig={appConfig}
        >
            <Provider store={store}>
                <StaticRouter location={req.url} context={context}>
                    <PathProvider assetPaths={appConfig}>
                        <App />
                    </PathProvider>
                </StaticRouter>
            </Provider>
        </Html>
    );

    if (context.url) {
        // redirect(301, context.url);
    } else {
        res.status(200).send(`<!DOCTYPE html>${html}`);
    }
};

const server = express();
const port = process.env.PORT || 3000;

module.exports = function(devServer = () => {}) {
    devServer(server);

    server.use(compression());
    server.use('/', express.static(path.resolve('./build/client')));
    server.use(clientRouter);

    const instance = server.listen(port, () => {
        debug(`Listening on port ${port}`);

        process.on('SIGTERM', () => {
            debug('Received SIGTERM, shutting down');

            instance.close(() => {
                debug('Server stopped successfully');
                process.exit(0);
            });

            setTimeout(() => {
                debug("Server didn't stop in top, terminating");
                process.exit(0);
            }, 9.9 * 1000);
        });
    });
};
