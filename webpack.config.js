var webpack = require('webpack');

module.exports = {
  context: __dirname + '/app',
  devtool: 'source-map',

  entry: {
    javascript: './main.js',
    html: './index.html'
  },

  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      // JavaScript - React
      {
        test: /(\.jsx|\.js)$/,
        loaders: ['react-hot', 'babel'],
        exclude: /(node_modules)/
      },
      // CSS - postCSS
      {
        test: /\.css$/,
        loader: "style-loader!css-loader!postcss-loader"
      },
      // Html - copy file
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },
    ]
  },

  postcss: function (webpack) {
    return [
      require("postcss-import")({ addDependencyTo: webpack }),
      require("postcss-url")(),
      require("postcss-cssnext")(),
      require("postcss-browser-reporter")(),
      require("postcss-reporter")(),
    ];
  }
};