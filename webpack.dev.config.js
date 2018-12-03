const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    index: './example/main.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(mp4)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          name:'audios/[name].[ext]',
          limit:10
        }
      } 
    ]
  },
  devServer: {
    stats: 'errors-only'
  },
  resolve: {
    extensions: ['.js', '.json']
  },
  plugins: [
    new htmlWebpackPlugin({
      template: 'example/index.html'
    })
  ]
}
