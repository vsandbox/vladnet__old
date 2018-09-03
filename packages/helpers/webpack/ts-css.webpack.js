const path = require("path");
const webpack = require("webpack");

module.exports = function(options = {}) {
  return {
    entry: options.entry || "./src/index.ts",
    mode: options.mode || "development",
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                modules: true,
                importLoaders: 1,
                camelCase: true,
                localIdentName: "[local]__[path][name]__[hash:base64:10]"
              }
            },
            "postcss-loader"
          ]
        },
      ],
    },
    resolve: {
      extensions: [ ".ts", ".tsx", ".js", ".css" ],
    },
    output: {
      path: path.resolve(options.dirname, "dist"),
      filename: "index.js",
      libraryTarget: "umd",
      globalObject: "this"
    },
    watchOptions: {
      ignored: /node_modules/
    },
    plugins: [
      new webpack.WatchIgnorePlugin([
        /\.js$/,
        /\.d.ts$/
      ]),
    ]
  };
}
