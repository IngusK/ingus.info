const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

var path = require('path');

const ROOT_DIR = path.resolve(__dirname, '../../');
const APP_DIR = path.resolve(__dirname, '../../src');
const BUILD_DIR = path.resolve(__dirname, '../../build');

module.exports = {
  context: APP_DIR,

    entry: [
      // 'webpack-dev-server/client?http://localhost:3000',
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
            // exclude: /node_modules(?!\/webpack-dev-server)/,
            loader: 'babel-loader?cacheDirectory=true',
            query: {
              babelrc: false,
              presets: [
                  ['babel-preset-es2015', {modules: false}],
                  'babel-preset-react',
                ],
                plugins: [
                  'babel-plugin-transform-decorators-legacy',
                  'babel-plugin-transform-class-properties',
                  'babel-plugin-transform-object-rest-spread',
                  'babel-plugin-transform-object-assign',
                  "inline-react-svg",
                  ['babel-plugin-transform-runtime', {
                    helpers: false,
                    polyfill: false,
                    regenerator: true
                  }],
                ]
            },
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
      new webpack.optimize.UglifyJsPlugin({
          beautify: false,
          parallel: true,
          mangle: {
              screw_ie8: true,
              keep_fnames: true
          },
          compress: {
              screw_ie8: true,
              warnings: false
          },
          comments: false
      }),
      new webpack.optimize.OccurrenceOrderPlugin(),
        new WebpackCleanupPlugin()
    ]
};
