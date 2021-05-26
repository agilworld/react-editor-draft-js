import webpack from 'webpack'
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import LiveReloadPlugin from 'webpack-livereload-plugin'

const ENV = process.env.NODE_ENV || 'development'
const DEV = ENV === 'development'
const PROD = ENV === 'production'
const SOURCE_DIR = 'src'
const DEST_DIR = 'dist'
const PUBLIC_PATH = '/'

export default  {
  mode: ENV,
  entry: path.join(__dirname, "index.js"),
  output: {
    path: path.join(__dirname, DEST_DIR),
    filename: '[name].js'
  },
  module: {
    rules: [
        {
          use: [
            { loader: 'babel-loader'},
            {
              loader: '@linaria/webpack-loader',
              options: {
                sourceMap: process.env.NODE_ENV !== 'production',
                cacheDirectory: '.linaria-cache',
              },
            }
          ],
          test: /\.js$/,
          exclude: /node_modules/
        },
        {
          use: ['style-loader', 'css-loader'],
          test: /\.css$/
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: "style-loader"
            }, {
              loader: "css-loader", options: {
                  sourceMap: true
              }
            }, {
              loader: "sass-loader", options: {
                  sourceMap: true
              }
            }
          ]
        },
        {
            test: /\.(png|jpg|gif|swf)$/,
            use: 'file-loader'
        },
        {
            test: /\.(ttf|eot|svg|woff(2)?)(\S+)?$/,
            use: 'file-loader'
        }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './example/components/index.html'
    }),
    new LiveReloadPlugin()
  ]
};