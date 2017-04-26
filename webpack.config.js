const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const sourceRoot = path.resolve('./src')
const outputRoot = path.resolve('./build')

module.exports = {
  target: 'web',
  context: sourceRoot,
  entry: [
    './index.js'
  ],
  output: {
    path: outputRoot,
    publicPath: '/',
    filename: 'javascripts/[name]-[chunkhash].js'
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
      },
      {
        test: /\.html$/,
        use: [
          { loader: 'html-loader'}
        ]
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader'},
          { loader: 'css-loader'},
          { loader: 'sass-loader'}
        ]
      }
    ]
  },
  plugins: [
    new webpack.EnvironmentPlugin([
      'NODE_ENV'
    ]),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html',
      inject: 'body'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: outputRoot,
    stats: {
      context: sourceRoot,
      colors: true,
      warnings: true,
      timings: true,
      reasons: true,
      errors: true,
      errorDetails: true,
      assets: false,
      cached: false,
      children: false,
      version: false,
      hash: false,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  }
}
