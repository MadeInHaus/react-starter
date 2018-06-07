const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const getPublicPath = require('./getPublicPath');
const generateScopedName = require('./generateScopedName');

const browserlist = ['> 1% in US', 'not ie 11', 'not op_mini all'];

module.exports = function(config = {}) {
    const DEV = config.dev || false;
    const webpackConfig = {
        mode: DEV ? 'development' : 'production',
        devtool: DEV ? 'cheap-module-eval-source-map' : 'hidden-source-map',
        cache: DEV,
        entry: {
            client: DEV
                ? ['webpack-hot-middleware/client', 'client']
                : ['client'],
            vendor: [
                'classnames',
                'debug',
                'react',
                'react-dom',
                'react-redux',
                'react-router',
                'react-router-dom',
                'redux',
                'redux-thunk',
            ],
        },
        output: {
            filename: 'js/[name].js',
            path: path.resolve(__dirname, '../build/client'),
            publicPath: DEV ? '' : getPublicPath(),
        },
        resolve: {
            modules: [path.join(__dirname, '../src'), 'node_modules'],
            extensions: ['.js', '.jsx', '.json', '.scss'],
        },
        performance: {
            hints: !DEV ? 'warning' : false,
        },
        optimization: {
            minimize: !DEV,
            noEmitOnErrors: !DEV,
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        chunks: 'initial',
                        name: 'vendor',
                        test: 'vendor',
                        enforce: true,
                    },
                },
            },
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: 'React-Redux-Webpack Starter',
                template: path.resolve(__dirname, '../src/templates/index.ejs'),
            }),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify(
                    process.env.NODE_ENV || DEV ? 'development' : 'production'
                ),
            }),
        ],
        module: {
            rules: [
                {
                    test: /\.(js|jsx|es6)?$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/,
                    options: {
                        cacheDirectory: DEV,
                        presets: [
                            [
                                'env',
                                {
                                    targets: {
                                        browsers: browserlist,
                                    },
                                    modules: false,
                                    loose: true,
                                    useBuiltIns: false,
                                    debug: true,
                                },
                            ],
                            'stage-0',
                            'react',
                        ],
                        plugins: [
                            'syntax-dynamic-import',
                            'transform-decorators-legacy',
                            'transform-class-properties',
                            [
                                'module-resolver',
                                {
                                    alias: {
                                        actions: './src/actions',
                                        assets: './src/assets',
                                        common: './src/common',
                                        components: './src/components',
                                        constants: './src/constants',
                                        containers: './src/containers',
                                        reducers: './src/reducers',
                                        store: './src/store',
                                        templates: './src/templates',
                                        ui: './src/common/ui',
                                    },
                                },
                            ],
                        ],
                        env: {
                            production: {
                                plugins: ['transform-react-remove-prop-types'],
                            },
                        },
                    },
                },
                {
                    test: /\.s?css$/,
                    use: [
                        DEV ? 'style-loader' : MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            query: {
                                modules: true,
                                minimize: !DEV,
                                getLocalIdent: generateScopedName,
                                importLoaders: 1,
                            },
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: true,
                                plugins: () => {
                                    return [
                                        require('autoprefixer')({
                                            browsers: browserlist,
                                        }),
                                    ];
                                },
                            },
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

    if (DEV) {
        webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
    } else {
        webpackConfig.plugins.push(
            new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i }),
            new CopyWebpackPlugin([
                {
                    from: path.join(__dirname, '../src/assets/images'),
                    to: 'images',
                },
            ]),
            new MiniCssExtractPlugin({
                filename: 'css/[name].css',
                chunkFilename: 'css/[id].css',
            }),
            new webpack.HashedModuleIdsPlugin()
        );
    }

    return webpackConfig;
};
