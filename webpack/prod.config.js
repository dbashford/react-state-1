var path = require("path")
  , webpack = require("webpack")
  ;

module.exports = {
  target:"web",
  progress: true,
  devtool: false,
  entry: ["./src/client/entry.js"],
  output: {
    path: path.resolve(__dirname, "../static"),
    filename: "client.js",
    publicPath: "static/"
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel', 'eslint-loader'],
      exclude: /node_modules/
    }]
  },
  resolve: {
    modulesDirectories: [
      'src',
      'node_modules'
    ],
    extensions: ['', '.js']
  }

};