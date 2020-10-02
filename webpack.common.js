const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // // *** origin function ***
  // entry: {
  //   index: path.join(__dirname, './src/js/index.js'),
  //   about: path.join(__dirname, './src/js/index2.js'),
  // },
  entry: {
    index: [path.join(__dirname, './src/js/index.js')],
    about: [path.join(__dirname, './src/js/about.js')],
  },
  output: {
    path: path.join(__dirname, './docs'),
    filename: 'js/[name].bundle.js',
    // publicPath: '/assets/',
  },
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    hot: true,
    port: '8092',
    inline: true,
    open: false,
    overlay: true,
    proxy: {
      '/api': {
        target: '',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
  plugins: [
    new webpack.BannerPlugin('版權所有，翻版必究'),
    new HtmlWebpackPlugin({
      title: '首頁',
      filename: 'index.html',
      template: path.join(__dirname, './src/index.html'),
      favicon: './src/images/favicon.ico',
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      title: '關於',
      filename: 'about.html',
      template: path.join(__dirname, './src/about.html'),
      favicon: './src/images/favicon.ico',
      chunks: ['about'],
    }),
  ],
};
