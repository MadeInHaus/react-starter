const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'sourcemap',
    target: 'node',
    externals: [nodeExternals()],
    entry: {
        app: 'server',
    },
    output: {
        path: path.resolve(__dirname, '../build/server'),
        filename: 'server.js',
        libraryTarget: 'commonjs2',
    },
    resolve: {
        modules: [path.join(__dirname, '../src'), 'node_modules'],
        extensions: ['.js', '.jsx', '.json', '.scss'],
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new ExtractTextPlugin('styles.css'),
    ],
    module: {
        noParse: /(\.min\.js|node_modules)$/,
        rules: [
            {
                test: /\.(js|jsx|es6)?$/,
                exclude: /node_modules/,
                include: [path.resolve(__dirname, '../src')],
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'node6', 'stage-0'],
                },
            },
            {
                test: /\.s?css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        'sass-loader',
                        'resolve-url-loader',
                        'sass-loader?sourceMap',
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
            {
                test: /\.(mp4|avi|mov)$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                },
            },
        ],
    },
};
