const path = require('path')

module.exports = {
  entry: {
    app: [
      './app/app.js'
    ],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.pack.js'
  },
  module: {
    rules: [
      {
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              "babel-preset-env",
              "babel-preset-react"
            ]
          }
        },
        exclude: /node_modules/,
        test: /\.js$/
      }
    ],
    entry: {
      index: './app/index'
    }

  }



}
