const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

module.exports = {
  context: path.resolve(__dirname, '..'),
  entry: './src/index.js',
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: 'babel-loader'
    }, {
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
      test: /\.(graphql|gql)$/,
    }]
  },
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      hash: true,
      template: path.resolve(__dirname, '../public/index.html')
    })
  ],
  resolve: {
    extensions: ['.mjs', '.graphql', '.js', '.jsx'],
    modules: ['./src', 'node_modules']
  }
}
