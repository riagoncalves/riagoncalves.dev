var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var handleErrors = require('../lib/error-handling');
var config = require('../config/javascript');
var browserSync = require('browser-sync');
var babel = require('gulp-babel');

gulp.task('javascript', function () {
  return gulp.src(config.src)
  	.pipe(babel({presets: ['es2015']}))
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream: true}));
});
