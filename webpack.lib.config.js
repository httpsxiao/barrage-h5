const path = require('path')

module.exports = {
  entry: {
    index: './src/BarrageH5.js'
  },
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'main.js',
    libraryTarget: 'umd',
    library: 'BarrageH5'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json']
  }
}
