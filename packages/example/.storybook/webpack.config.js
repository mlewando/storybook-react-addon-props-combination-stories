const webpack = require("webpack");

const config = {
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ["awesome-typescript-loader"]
      }
    ]
  },
  plugins: [new webpack.NamedModulesPlugin()]
};
module.exports = config;
