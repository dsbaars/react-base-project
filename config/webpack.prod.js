const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const paths = require('./paths');

module.exports = merge(common, {
    output: {
        path: paths.appBuild,
        filename: 'index.bundle.js'
      }, 
    mode: 'production'
});