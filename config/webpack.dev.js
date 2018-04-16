const merge = require('webpack-merge');
const webpack = require('webpack');
const config = require('./webpack.base');
const GLOBALS = {
    'process.env': {
        NODE_ENV: JSON.stringify('development'),
    },
};

module.exports = merge.smart(config, {
    cache: true,
    devtool: 'inline-source-map',
    entry: {
        client: ['webpack-hot-middleware/client', 'client'],
    },
    plugins: [
        new webpack.DefinePlugin(GLOBALS),
        new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        query: {
                            modules: true,
                            localIdentName: '[name]__[local]___[hash:base64:5]',
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: { sourceMap: true },
                    },
                    'resolve-url-loader',
                    'sass-loader?sourceMap',
                ],
            },
        ],
    },
});
