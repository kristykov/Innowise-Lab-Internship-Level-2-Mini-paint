const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = ({ mode }) => {
  return {
    entry: path.join(__dirname, "src", "index.tsx"),
    mode: mode === "dev" ? "development" : "production",
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
      extensions: [".tsx", ".ts", ".js", ".jsx"],
    },
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "bundle.js",
    },
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    },
    devServer: {
      port: 8080,
      historyApiFallback: true,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          exclude: /node_modules/,
          use: [{ loader: "babel-loader" }],
        },
        {
          test: /\.(jpg|jpeg|png|gif|mp3|woff(2)?|ttf|eot)$/,
          use: [{ loader: "file-loader" }],
        },
        {
          test: /\.(css|scss)$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.svg$/,
          use: ["@svgr/webpack"],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: path.resolve("./src/index.html"),
      }),
      new CopyPlugin({
        patterns: ["_redirects"],
      }),
    ],
  };
};
