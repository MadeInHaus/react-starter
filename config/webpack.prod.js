const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const config = require('./webpack.base');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

const GLOBALS = {
    'process.env': {
        NODE_ENV: JSON.stringify('production'),
    },
};

module.exports = merge.smart(config, {
    devtool: 'cheap-module-source-map',
    entry: {
        client: ['client'],
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: path.join(__dirname, '../src/images'),
                to: 'images',
            },
        ]),
        new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i }),
        new webpack.DefinePlugin(GLOBALS),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            comments: false,
        }),
        new ExtractTextPlugin('css/app.css'),
    ],
    module: {
        noParse: /\.min\.js$/,
        rules: [],
    },
});
