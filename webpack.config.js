const path = require('path')
module.exports = {
  entry: path.join(__dirname, 'src/js', 'App.js'),
  devServer: {
    contentBase: path.join(__dirname, 'src'),
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        include: [/src/, /node_modules/, /css/]
      }, {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-2']
        }
      }, {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'html-loader'
      }, {
        test: /\.json$/,
        loader: 'json-loader',
        include: '/build/contracts/'
      }, {
        test: /\.(png|jpg)$/,
        use: {
          loader: 'url-loader'
        }
      }
    ]
  }
}
