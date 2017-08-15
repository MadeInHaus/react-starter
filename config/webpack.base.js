const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        vendor: [
            'classnames',
            'debug',
            'lodash',
            'react',
            'react-dom',
            'react-router',
            'react-router-dom',
            'redux',
        ],
    },
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, '../build/client'),
        publicPath: '/',
    },
    resolve: {
        modules: [
            path.join(__dirname, '../src/javascript'),
            path.join(__dirname, '../src/images'),
            path.join(__dirname, '../src/sass'),
            path.join(__dirname, '../src/fonts'),
            path.join(__dirname, '../src/assets'),
            'node_modules',
        ],
        extensions: ['.js', '.jsx', '.json', '.scss'],
    },
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'js/vendor.bundle.js',
            minChunks: Infinity,
        }),
        new ExtractTextPlugin('[name].css'),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx|es6)?$/,
                include: [path.resolve(__dirname, '../src/javascript')],
                loader: 'babel-loader',
            },
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
                        'postcss-loader',
                        'sass-loader',
                    ],
                }),
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
        ],
    },
};
