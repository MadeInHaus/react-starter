const path = require('path');
const custom = require('../config/webpack.dev');

module.exports = async ({ config, mode }) => {
    return {
        ...config,
        resolve: { ...custom.resolve },
        module: { ...config.module, rules: custom.module.rules },
    };
};
