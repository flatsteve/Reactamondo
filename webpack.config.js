module.exports = {
  context: __dirname + '/app',
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
      {
        test: /(\.jsx|\.js)$/,
        loaders: ['react-hot', 'babel'],
        exclude: /(node_modules)/
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },
    ]
  }
};