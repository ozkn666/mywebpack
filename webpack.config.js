const MODE = "development";
const userSourceMap = MODE === "development";

const path = require('path');

// cssファイル吐き出す版を使う時に読み込むプラグイン
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = {
  mode: MODE,
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public')
  },
  module: {
    rules: [
      // Sassファイルの読み込みとコンパイル
      {
        test: /\.scss/, // 対象となるファイルの拡張子
        // シンプル版
        // use:['style-loader','css-loader','sass-loader'],
        // ソースマップ付いてる版
        // use: [
        //   'style-loader',
        //   {
        //     loader: 'css-loader',
        //     options: {
        //       url: false,
        //       sourceMap: userSourceMap,
        //       importLoaders: 2
        //     },
        //   },
        //   {
        //     loader: 'sass-loader',
        //     options: {
        //       sourceMap: userSourceMap,
        //     }
        //   }
        // ]
        // cssファイル吐き出す版
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ]
      },
      // jsのコンパイル
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [['@babel/preset-env', { modules: false }]]
            }
          }
        ]
      },
      // EsLintの設定
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      }
    ]
  },
  devtool: 'source-map',
  plugins: [
    // cssファイル吐き出す版を使う時の設定
    new MiniCssExtractPlugin({
      filename: './css/style.css'
    }),
    new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development,
      // ./public directory is being served
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['public'] },
      files: [
        "src",
        "public/index.html"
      ]
    })

  ]
};
