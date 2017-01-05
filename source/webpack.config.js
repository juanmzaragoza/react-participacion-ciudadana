var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      $: "jquery",
      jquery: "jquery",
      "windows.jQuery": "jquery",
      jQuery:"jquery"
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"'+process.env.NODE_ENV+'"' || '"development"'
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [ 'babel' ],
        exclude: /node_modules/,
        include: __dirname
      },
      { test: /\.css$/, loader: "style-loader!css-loader?importLoaders=1" },
      { test: /\.(jpg|png|woff|woff2|eot|ttf|svg|htc|gif)(\?\S*)?$/, loader: 'url-loader?limit=100000' },
      { test: /\.json$/, loader: "json-loader"}
    ]
  }
}
