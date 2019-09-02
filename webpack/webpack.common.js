const CircularDependencyPlugin = require('circular-dependency-plugin')
const path = require('path')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = {
  devServer: {
    contentBase: './public',
    historyApiFallback: true,
    open: true
  },
  devtool: 'eval-source-map',
  entry: './src/index.js',
  mode: 'development',
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
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
      reportFilename: path.resolve(__dirname, 'dump/analysis/report.html')
    }),
    new CircularDependencyPlugin({
      exclude: /node_modules/
    })
  ],
  resolve: {
    extensions: ['.mjs', '.graphql', '.js', '.jsx'],
    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules'
    ]
  }
}
