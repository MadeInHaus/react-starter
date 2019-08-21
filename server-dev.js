require('dotenv').config();

function devServer(app) {
    const webpack = require('webpack');
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');
    const config = require('./config/webpack.dev');

    const compiler = webpack(config);

    app.use(
        webpackDevMiddleware(compiler, {
            noInfo: true,
            publicPath: config.output.publicPath,
            stats: {
                colors: true,
            },
            historyApiFallback: true,
        })
    );

    app.use(webpackHotMiddleware(compiler));
}

require('./build/server/server')(devServer);
