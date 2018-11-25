const CircularDependencyPlugin = require('circular-dependency-plugin')
const path = require('path')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = {
  devServer: {
    contentBase: './public',
    historyApiFallback: true
  },
  devtool: 'eval-source-map',
  entry: './src/index.js',
  mode: 'development',
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
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
      reportFilename: path.resolve(__dirname, 'dev/analysis/report.html')
    }),
    new CircularDependencyPlugin()
  ],
  resolve: {
    extensions: ['.mjs', '.js', '.jsx', '.json'],
    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules'
    ]
  }
}
