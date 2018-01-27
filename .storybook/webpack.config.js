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
        use: [
          {
            loader: "awesome-typescript-loader",
            options: {
              rootDir: "./"
            }
          }
        ]
      }
    ]
  },
  plugins: [new webpack.NamedModulesPlugin()]
};
module.exports = config;
