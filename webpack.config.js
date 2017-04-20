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
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
}
