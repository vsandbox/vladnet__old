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
      ],
    },
    resolve: {
      extensions: [ ".ts", ".tsx", ".js" ],
    },
    output: {
      path: path.resolve(options.dirname, "dist"),
      filename: "index.js",
      libraryTarget: "umd",
      globalObject: "this"
    },
    watchOptions: {
      poll: true,
      ignored: [
        /node_modules([\\]+|\/)+(?!@vladnet\/helpers)/,
        /d\.ts/
      ]
    }
  };
}
