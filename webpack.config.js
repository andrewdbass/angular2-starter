var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/main.ts',
  output: {
    path: './dist',
    filename: "app.bundle.js"
  },
  module: {
    loaders: [
      {test: /\.ts$/, loader: 'ts'},
      { test: /\.css$/, loader: "style-loader!css-loader" }
    ]
  },
  resolve:{
    extensions: ['','.js','.ts','.css']
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'./src/index.html'
    })
  ]
}
