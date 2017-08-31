const path = require('path');
const config = require('../config/webpack.dev');

module.exports = {
    resolve: config.resolve,
    module: config.module,
};
