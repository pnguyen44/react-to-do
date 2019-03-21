const path = require('path')

module.exports = {
  mode: 'none',
  entry: './app/index.js',
  output: {
    // path: __dirname + "/build/",
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.bundle.js'
  },
  module: {
    rules: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: [
          "babel-preset-env",
          "babel-preset-react",
          'env'
        ]
      }
    }]
  }
}
