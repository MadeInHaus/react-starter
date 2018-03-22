const merge = require('webpack-merge');
const webpack = require('webpack');
const config = require('./webpack.base');

module.exports = merge.smart(config, {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    cache: true,
    entry: {
        client: ['webpack-hot-middleware/client', 'client'],
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(
                process.env.NODE_ENV || 'development'
            ),
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
        rules: [],
    },
    performance: {
        hints: false,
    },
});
