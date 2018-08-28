const path = require('path')
const HtmlWebPackPlugin = require("html-webpack-plugin");
const paths = require('./paths');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      contentBase: './public',
      port: 3030
    },  
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/, 
          use: 'babel-loader'
        },
        {
          test: /\.scss$/,
          use: [
            "style-loader", // creates style nodes from JS strings
            "css-loader", // translates CSS into CommonJS
            "sass-loader" // compiles Sass to CSS, using Node Sass by default
          ]
        }  
      ]   
    },
    plugins: [
      new HtmlWebPackPlugin({
        inject: true,
        template: 'public/index.html',
      }),
    ]
  };