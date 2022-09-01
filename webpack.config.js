const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
require("dotenv").config();

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    bundle: path.resolve(__dirname, "./src/index.js"),
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "OSP",
      template: "index.html",
    }),
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
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
