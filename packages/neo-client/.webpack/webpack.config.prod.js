const path = require('path');
const webpack = require('webpack');

const CompressionPlugin = require('compression-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',

  entry: path.join(__dirname, './../src/index.js'),

  output: {
    path: path.join(__dirname, './../../neo-server/static'),
    filename: `[name].min.js?${new Date().getTime()}`,
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      }
    ]
  },

  optimization: {
    mangleWasmImports: true,
    minimizer: [new TerserPlugin()],
    nodeEnv: 'production'
  },

  plugins: [
    new CleanWebpackPlugin(),

    new CompressionPlugin({
      threshold: 10240
    }),

    new CompressionPlugin({
      filename: '[path].br[query]',
      algorithm: 'brotliCompress',
      compressionOptions: {
        level: 11
      },
      threshold: 10240
    }),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: './public/',
          to: './'
        }
      ]
    }),

    new HtmlWebPackPlugin({
      template: path.join(__dirname, './../public/index.html')
    }),

    new MomentLocalesPlugin({
      localesToKeep: ['es']
    }),

    new webpack.DefinePlugin({ config: JSON.stringify(require('config')) })
  ],

  resolve: {
    extensions: ['.js'],
    alias: {
      '@': path.join(__dirname, './../src/')
    },
    modules: ['node_modules']
  }
};
