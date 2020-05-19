const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');

var path = require('path');

const ROOT_DIR = path.resolve(__dirname, '../../');
const APP_DIR = path.resolve(__dirname, '../../src');
const BUILD_DIR = path.resolve(__dirname, '../../build');

module.exports = {
  context: APP_DIR,
  mode: 'production',
  entry: [
    APP_DIR + '/app/index.js'
  ],
  output: {
      path: BUILD_DIR,
      filename: 'main.js',
      publicPath: BUILD_DIR
  },
  devtool: 'hidden-source-map',
  devServer: {
    port: 3000,
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },

  module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.(css|scss)$/,
          loader: 'style-loader!css-loader!sass-loader'
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: 'url-loader'
            }
          ]
        },
      ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
      new WebpackCleanupPlugin()
  ]
};
