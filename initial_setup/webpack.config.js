var config ={
  context: __dirname + '/src',
  entry: "./index",
  output: {
      path: __dirname + '/www',
      filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        loader: 'babel',
        test: /\.jsx?$/,
        exclude: /node_modules/,
        include: [
          __dirname + "/src",
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
