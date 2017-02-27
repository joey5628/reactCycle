const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const config = require('./config')


// px2rem
const px2remConfig = Object.assign({
  remUnit     : 75,
  remPrecision: 8,
}, config.px2rem);

module.exports = {
  entry: {
    'app': ['./src/main.js'],
    'vendor': ['react', 'react-dom']
  },
  output: {
    path: path.resolve(__dirname, '../tmp'),
    publicPath: '/',
    filename: 'assets/js/[name].js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 8192,
          name: 'assets/img/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: 'assets/fonts/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.(html|handlebars|hbs)$/,
        loader: 'handlebars-loader'
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract(['css', 'px2remless?' + JSON.stringify(px2remConfig), 'less'])
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(['css', 'px2remless?' + JSON.stringify(px2remConfig)])
      }
    ]
  }
}
