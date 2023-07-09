const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

require("dotenv").config();

console.log(`Webpack is building in ${process.env.NODE_ENV} mode...`);

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    // index: path.resolve(__dirname, "./src/index.tsx"),
    index: { import: path.resolve(__dirname, "./src/index.tsx"), dependOn: "shared" },
    app: { import: path.resolve(__dirname, "./src/App.tsx"), dependOn: "shared" },
    login: { import: path.resolve(__dirname, "./src/Components/Login.tsx"), dependOn: "shared" },
    signup: { import: path.resolve(__dirname, "./src/Components/Signup.tsx"), dependOn: "shared" },
    userProjectsContainer: { import: path.resolve(__dirname, "./src/Containers/UserProjectsContainer.tsx"), dependOn: "shared" },
    messageContainer: { import: path.resolve(__dirname, "./src/Containers/MessageContainer.tsx"), dependOn: "shared" },
    deadLetterMessage: { import: path.resolve(__dirname, "./src/Components/DeadLetterMessage.tsx"), dependOn: "shared" },
    shared: ["react", "react-dom", "@mui/material"],
  },
  output: {
    // filename: "bundle.js",
    filename: "[name].[chunkhash].js",
    publicPath: "/",
    path: path.resolve(__dirname, "build"),
    // chunkFilename: "[name].chunk.js",
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  externals: {
    express: "express",
  },
  plugins: [
    // HTML Webpack Plugin to generate an HTML file with injected bundle.js
    new HtmlWebpackPlugin({
      title: "RabbitTracks",
      template: "index.html",
      favicon: "./src/assets/images/favicon.ico",
    }),
    // Node Polyfill Plugin to provide polyfills for Node.js core modules
    new NodePolyfillPlugin(),
    // new BundleAnalyzerPlugin(),
  ],
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