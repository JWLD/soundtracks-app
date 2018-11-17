const path = require('path')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

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
    })
  ],
  resolve: {
    extensions: ['.mjs', '.js', '.jsx', '.json'],
    modules: [
      path.resolve(__dirname, 'src/client'),
      'node_modules'
    ]
  }
}
