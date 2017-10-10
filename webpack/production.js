const webpack = require('webpack');
const merge = require('lodash/merge');
const baseConfig = require('./base');

module.exports = merge(baseConfig, {
  // config only for production
  plugins: [
    new webpack.optimize.AggressiveMergingPlugin(),
  ],
});
