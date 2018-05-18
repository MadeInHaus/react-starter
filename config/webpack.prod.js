const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = require('./webpack.base');
const getPublicPath = require('./getPublicPath');

module.exports = merge.smart(config, {
    mode: 'production',
    devtool: 'cheap-module-source-map',
    entry: {
        client: ['client'],
    },
    output: {
        publicPath: getPublicPath(),
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(
                process.env.NODE_ENV || 'production'
            ),
        }),
        new CopyWebpackPlugin([
            {
                from: path.join(__dirname, '../src/assets/images'),
                to: 'images',
            },
        ]),
        new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i }),
        new webpack.NoEmitOnErrorsPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: 'css/[id].css',
        }),
        new webpack.HashedModuleIdsPlugin(),
    ],
    optimization: {
        minimize: true,
    },
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [
                    MiniCssExtractPlugin.loader,
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
