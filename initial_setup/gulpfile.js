var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');

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
