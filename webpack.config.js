const path = require('path');
const cssExtract = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  mode: "development",
  entry: "./src/core/index.js",
  output: {
    path: path.resolve(__dirname, "./public/"),
    filename: "./js/main.js"
  },
  module: {
    rules: [
      {
       test: /\.vue$/,
       loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        },
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: cssExtract.loader
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: cssExtract.loader
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ],
  },
  devServer: {
    inline:true,
    host: '0.0.0.0',
    port: 18000,
    contentBase: path.join(__dirname, 'public'),
  },
  plugins: [
    new VueLoaderPlugin(),
    new cssExtract({
      filename: './css/main.css',
    })
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  }
};
