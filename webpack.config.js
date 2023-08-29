const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv');
const webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, '/src/index.js'),
  output: {
    path: path.resolve(__dirname, 'src/dist'),
    filename: 'bundle.js',
  },
  devServer: {
    static: {
      publicPath: '/dist',
      directory: path.join(__dirname, '/src/dist'),
    },
    compress: true,
    historyApiFallback: true,
    port: 8080,
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: '/src/index.html',
      filename: 'index.html',
    }),
    new webpack.DefinePlugin({
      'process.env': dotenv.parsed,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css?/,
        // include: path.resolve(__dirname, 'src'),
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
};


