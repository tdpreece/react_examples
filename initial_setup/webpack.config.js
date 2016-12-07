const path = require('path');

var config ={
  context: path.join(__dirname, 'src'),
  entry: "./index",
  output: {
      path: path.join(__dirname, 'www'),
      filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        loader: 'babel',
        test: /\.jsx?$/,
        exclude: /node_modules/,
        include: [
          path.join(__dirname, 'src'),
        ],
        query: {
          presets: ['react', 'es2015'],
        },
      },
    ],
  },
  // Important! Do not remove ''. If you do, imports without
  // an extension won't work anymore!
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};

module.exports = config;
