const webpack               = require('webpack');
const WebpackNotifierPlugin = require('webpack-notifier');
const HtmlWebpackPlugin     = require('html-webpack-plugin');
const path                  = require('path');

const webpackConfig = {
  devtool: '#eval',
  entry: {
    app: [
      'babel-polyfill', // Set up an ES6-ish environment
      'webpack-dev-server/client?http://localhost:9898', // WebpackDevServer host and port
      'webpack/hot/only-dev-server',
      path.join(__dirname, 'index.js')
    ],
    vendor: './vendors/index.js'
  },
  devServer: {

    // Configuration in case you need to proxy calls to an api
    proxy: {
      '/api/*': ''
    },
    historyApiFallback: true,
    contentBase: './build/dev_build'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [ 'babel-loader' ],
        exclude: /node_modules/,
        include: __dirname
      },
      { test: /\.css$/, loader: "style-loader!css-loader?importLoaders=1" },
      { test: /\.(jpg|png|woff|woff2|eot|ttf|svg|htc|gif)(\?\S*)?$/, loader: 'url-loader?limit=100000' },
      { test: /\.json$/, loader: "json-loader"},
      { test: /\.(mp4|webm)$/, loader: 'url-loader?limit=10000' }
    ]
  },
  resolve: {

    // Needed so you can require("a") instead of require("a.jsx")
    //extensions: [ '.js', '.jsx', '.json', '.css', '.scss'],

    // Let us do things like require("app/reducers/application")
    //root: __dirname,

    // Whenever someone does import "react", resolve the one in the node_modules
    // at the top level, just in case a dependency also has react in its node_modules,
    // we don't want to be running to versions of react!!!
    alias: {
      react: path.join(__dirname, 'node_modules/react')
    }
  },
  plugins: [
    new WebpackNotifierPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.bundle-[hash].js',
      minChunks: Infinity
    }),
    new HtmlWebpackPlugin({
      template: 'public/index.tpl.html',
      //filename: 'index.html'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jquery: "jquery",
      "window.jQuery": "jquery",
      jQuery:"jquery"
    })
  ]
};


module.exports = webpackConfig;
