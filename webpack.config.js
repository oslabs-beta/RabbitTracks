const path = require("path");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

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
    publicPath: "/",
    path: path.resolve(__dirname, "build"),
  },
  externals: {
    express: "express",
  },
  plugins: [
    // HTML Webpack Plugin to generate an HTML file with injected bundle.js
    new HtmlWebpackPlugin({
      title: "RabbitTracks",
      template: "index.html",
    }),
    // Node Polyfill Plugin to provide polyfills for Node.js core modules
    new NodePolyfillPlugin(),
    process.env.NODE_ENV === "development" &&
      new BundleAnalyzerPlugin({
        analyzerMode: "static",
        generateStatsFile: true,
        openAnalyzer: false,
        logLevel: "info",
      }),
  ].filter(Boolean),

  devServer: {
    // Serve static files from the build directory
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
        test: /\.jsx?/, // Transpile JavaScript and JSX files
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
        test: /\.(ts|tsx)$/, // Transpile TypeScript files
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
      {
        test: /\.s[ac]ss$/i, // Process SCSS files
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i, // Load image files
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]", // Output file name and path
            },
          },
        ],
      },
    ],
  },
};
