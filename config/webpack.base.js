const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        vendor: [
            'classnames',
            'debug',
            'lodash',
            'react',
            'react-dom',
            'react-redux',
            'react-router',
            'react-router-dom',
            'react-waypoint',
            'redux',
            'redux-thunk',
        ],
    },
    output: {
        filename: 'js/[name].[hash].js',
        chunkFilename: 'js/[name].[hash].js',
        path: path.resolve(__dirname, '../build/client'),
    },
    resolve: {
        modules: [path.join(__dirname, '../src'), 'node_modules'],
        extensions: ['.js', '.jsx', '.json', '.scss'],
    },
    plugins: [
        new webpack.EnvironmentPlugin({
            NODE_ENV: 'development',
        }),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: Infinity,
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'runtime',
        }),
        new HtmlWebpackPlugin({
            title: 'React-Redux-Webpack Starter',
            template: path.resolve(__dirname, '../src/templates/index.ejs'),
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx|es6)?$/,
                include: [path.resolve(__dirname, '../src')],
                loader: 'babel-loader',
            },
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
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                loader: 'url-loader',
                query: {
                    limit: 8192,
                    name: 'images/[name].[ext]?[hash]',
                },
            },
            {
                test: /\.(woff|woff2|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader',
                query: {
                    limit: 8192,
                    name: 'fonts/[name].[ext]?[hash]',
                },
            },
            {
                test: /\.(mp4|avi|mov)$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: 'videos/[name].[ext]?[hash]',
                },
            },
        ],
    },
};
