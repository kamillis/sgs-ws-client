const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const rootPath = process.cwd();

module.exports = {
  target: 'node',
  externals: [nodeExternals()],
  context: rootPath,
  entry: ['babel-polyfill', './server.js'],
  devtool: 'inline-sourcemap',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        enforce: 'pre',
        exclude: /node_modules/,
        use: [
          {
            loader: 'eslint-loader',
            options: { failOnError: true },
          },
        ],
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    path: rootPath,
    filename: 'server.dist.js',
  },
};
