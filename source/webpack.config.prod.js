const webpack               = require('webpack');
const WebpackNotifierPlugin = require('webpack-notifier');
const HtmlWebpackPlugin     = require('html-webpack-plugin');
const ExtractTextPlugin     = require('extract-text-webpack-plugin');
const path                  = require('path');

const webpackConfig = {
  devtool: '#cheap-module-source-map',
  entry: {
    app: [
      'babel-polyfill', // Set up an ES6-ish environment
      path.join(__dirname, 'index.js')
    ],
    vendor: './vendors/index.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true
  },  
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [ 'babel-loader' ],
        exclude: /node_modules/,
        include: __dirname
      },
      { test: /\.css$/, loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader?importLoaders=1'}) },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader?modules!sass-loader'}) },
      { test: /\.(jpg|png|woff|woff2|eot|ttf|svg|htc|gif)(\?\S*)?$/, loader: 'url-loader?limit=100000' },
      { test: /\.json$/, loader: "json-loader"},
      { test: /\.(mp4|webm)$/, loader: 'url-loader?limit=10000' }
    ]
  },
  resolve: {

    // Needed so you can require("a") instead of require("a.jsx")
    extensions: [ '.js', '.jsx', '.json', '.css', '.scss'],

    // Let us do things like require("app/reducers/application")
    modules: [__dirname, 'node_modules'],

    // Whenever someone does import "react", resolve the one in the node_modules
    // at the top level, just in case a dependency also has react in its node_modules,
    // we don't want to be running to versions of react!!!
    alias: {
      react: path.join(__dirname, 'node_modules/react')
    }
  },
  plugins: [
    new ExtractTextPlugin({ filename: 'app.bundle-[chunkhash].css', disable: false, allChunks: true }),
    new WebpackNotifierPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.bundle-[chunkhash].js',
      minChunks: Infinity
    }),
    new HtmlWebpackPlugin({
      template: 'public/index.tpl.html',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
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
