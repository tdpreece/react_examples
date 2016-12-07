var gulp = require('gulp');
var gutil = require('gulp-util');
const path = require('path');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

gulp.task("build", function(callback) {
  // run webpack
  webpack(
    // configuration
    require('./webpack.config.js'), function(err, stats) {
      if(err) throw new gutil.PluginError("webpack", err);
      gutil.log("[webpack]", stats.toString({
          // output options
      }));
      callback();
    });
});

gulp.task("serve", function(callback) {
    var compiler = webpack(require('./webpack.config.js'));

    new WebpackDevServer(compiler, {
      contentBase: path.join(__dirname, 'www')
    }).listen(8080, "localhost", function(err) {
        if(err) throw new gutil.PluginError("webpack-dev-server", err);
        // Server listening
        gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");

        // keep the server alive or continue?
        // callback();
    });
});
