process.env.NODE_ENV = 'development';
const path = require('path');
const webpackIsomorphicToolsConfig = require('./webpack-isomorphic-tools-config');
const WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');

// create a WebpackIsomorphicToolsPlugin instance to allow Node to import images and styles
const webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(webpackIsomorphicToolsConfig);

module.exports = {
  entry: {
    main: './client/main.js'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].bundle.js',
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: webpackIsomorphicToolsPlugin.regular_expression('styles'),
        loader: 'style-loader!css-loader',
      }
    ],
    
  },
  resolve: {
    extensions: ['.js', '.jsx', '.es6'],
  }
};
