const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
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
    plugins: [new webpack.NoEmitOnErrorsPlugin()],
    module: {
        noParse: /(\.min\.js|node_modules)$/,
        rules: [
            {
                test: /\.(js|jsx|es6)?$/,
                exclude: /node_modules/,
                include: [path.resolve(__dirname, '../src')],
                loader: 'babel-loader',
                query: {
                    presets: ['node6', 'stage-0'],
                },
            },
        ],
    },
};
