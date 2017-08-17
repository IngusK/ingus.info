const webpack = require('webpack');

var path = require('path');

const ROOT_DIR = path.resolve(__dirname, '../../');
const APP_DIR = path.resolve(__dirname, '../../src');
const BUILD_DIR = path.resolve(__dirname, '../../build');

module.exports = {
  context: APP_DIR,

    entry: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      APP_DIR + '/app/index.js'
    ],
    output: {
        path: BUILD_DIR,
        filename: 'main.js',
        publicPath: '/build/',
    },
    devtool: 'cheap-eval-source-map',
    devServer: {
      hot: true,
      contentBase: ROOT_DIR,
      publicPath: '/build/',
      port: 3000,
      historyApiFallback: true
    },
    resolve: {
      modules: [ROOT_DIR + '/node_modules', 'node_modules'],
      extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
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
      new webpack.HotModuleReplacementPlugin(), // Enable HMR
      new webpack.NamedModulesPlugin(),
    ],
};
