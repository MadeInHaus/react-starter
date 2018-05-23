const webpackConfig = require('./webpack');
console.log(webpackConfig({}));
module.exports = webpackConfig({});