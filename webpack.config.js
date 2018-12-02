const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    index: './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: '/\.js$/',
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: '/\.html$/',
        loader: 'html-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json']
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}
