const path  = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader' ,
      },
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.js'
    }
  },
  devServer: {
    compress: true,
    port: 9000,
    contentBase: path.join(__dirname, "dist")
  },
  plugins: [
    new HtmlWebpackPlugin({template: './index.html'}),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    })
  ]
};
