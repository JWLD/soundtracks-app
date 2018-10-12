const path = require('path')

module.exports = {
  devServer: {
    contentBase: './public',
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8070'
      }
    }
  },
  devtool: 'eval-source-map',
  entry: './src/client/index.js',
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: 'babel-loader'
    }]
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: [
      path.resolve(__dirname, 'src/client'),
      'node_modules'
    ]
  }
}
