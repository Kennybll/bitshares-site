const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')
module.exports = {
  entry: [
    './src/index.tsx'
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      },
      {
        test: /\.tsx?$/,
        use: ['awesome-typescript-loader']
      }, {
        enforce: 'pre',
        test: /\.jsx$/,
        loader: 'source-map-loader'
      }, {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: "css-loader",
              options: {
                minimize: true
              }
            },
            {
              loader: 'less-loader',
              options: {
                javascriptEnabled: true
              }
            }
          ]
        })
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './template.html'
    }),
    new ExtractTextPlugin("style.css"),
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: 'source-map',
  resolve: {
    extensions: [".js", ".ts", ".tsx"]
  },
  devServer: {
    port: 8080,
    inline: true,
    progress: true,
    historyApiFallback: true
  }
}