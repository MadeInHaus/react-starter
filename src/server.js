const path = require('path');
const express = require('express');
const compression = require('compression');

const debug = require('debug')('Server:');

debug.enabled = true;

const clientRouter = (req, res) => {
    res.sendFile(path.resolve('./build/client/index.html'));
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
