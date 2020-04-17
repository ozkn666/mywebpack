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
        // cssをjsにバンドルしつつ、ソースマップを付与する
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: true,
              sourceMap: userSourceMap,
              importLoaders: 2
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: userSourceMap,
            }
          }
        ]
        // cssをjsにバンドルせずにファイル吐き出す
        // use: [
        //   MiniCssExtractPlugin.loader,
        //   'css-loader',
        //   'sass-loader',
        // ]
      },
      // sassファイル内でurl指定している画像のバンドル
      // limit以下のファイルはjsにバンドル化
      {
        test: /\.(gif|png|jpg|eot|wof|woff|woff2|ttf|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 100 * 1024, // 100KB以上だったら埋め込まずファイルとして分離する
              name: './img/[name].[ext]'
            }
          }
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
      server: { baseDir: ['public'] },
      files: [
        "src",
        "public/index.html"
      ]
    })
  ]
};
