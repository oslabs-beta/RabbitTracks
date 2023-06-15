const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
require("dotenv").config();

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    bundle: path.resolve(__dirname, "./src/index.tsx"),
  },
  output: {
    filename: "bundle.js",
    publicPath: '/',
    path: path.resolve(__dirname, "build"),
  },
  externals: {
    express: "express",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "RabbitTracks",
      template: "index.html",
      favicon: './src/assets/images/favicon.ico'
    }),
    new NodePolyfillPlugin(),
  ],
  devServer: {
    static: {
      publicPath: "/",
      directory: path.resolve(__dirname, "build"),
    },
    hot: true,
    proxy: {
      "*": "http://localhost:3000",
    },
  },
  resolve: {
    extensions: [".tsx", ".jsx", ".ts", ".js"],
    fallback: {
      fs: false,
      net: false,
      async_hooks: false,
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]",
            },
          },
        ],
      },
    ],
  },
};
