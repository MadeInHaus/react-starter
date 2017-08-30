const path = require('path');

module.exports = {
    resolve: {
        modules: [path.join(__dirname, '../src'), 'node_modules'],
        extensions: ['.js', '.jsx', '.json', '.scss'],
    },
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
