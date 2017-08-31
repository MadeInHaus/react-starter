const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const config = require('./webpack.base');

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
                from: path.join(__dirname, '../src/assets/images'),
                to: 'images',
            },
        ]),
        new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i }),
        new webpack.DefinePlugin(GLOBALS),
        new webpack.NoEmitOnErrorsPlugin(),
        new ExtractTextPlugin('css/[name].css'),
        new webpack.optimize.UglifyJsPlugin({
            comments: false,
            mangle: false,
        }),
        new OptimizeCssAssetsPlugin(),
    ],
    module: {
        noParse: /\.min\.js$/,
        rules: [
            {
                test: /\.s?css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            query: {
                                modules: true,
                                localIdentName:
                                    '[name]__[local]___[hash:base64:5]',
                            },
                        },
                        {
                            loader: 'postcss-loader',
                            options: { sourceMap: true },
                        },
                        'resolve-url-loader',
                        'sass-loader?sourceMap',
                    ],
                }),
            },
        ],
    },
});
