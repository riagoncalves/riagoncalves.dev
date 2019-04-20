var gulp = require('gulp');
var sass = require('../config/sass');
var images = require('../config/images');
var fonts = require('../config/fonts');
var javascript = require('../config/javascript');
var browserSync = require('browser-sync');
var watch = require('gulp-watch');

gulp.task('watch', ['default', 'browserSync'], function () {
  watch(fonts.src, function() { gulp.start('fonts'); });
  watch(images.src, function() { gulp.start('images'); });
  watch(sass.watch, function() { gulp.start('sass'); });
  watch(javascript.src, function() { gulp.start('javascript'); });
});
