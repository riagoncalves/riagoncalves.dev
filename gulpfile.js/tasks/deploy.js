var gulp = require('gulp');
var config = require('../config');
var gulpSequence = require('gulp-sequence');

gulp.task('copy-index', function() {
  return gulp.src('index.html')
    .pipe(gulp.dest(config.deployDirectory));
});

gulp.task('copy-assets', function() {
  return gulp.src('assets/**/*')
    .pipe(gulp.dest(config.deployDirectory + '/assets'));
});

gulp.task('deploy', function(cb) {
  gulpSequence(
    'clean',
    ['fonts', 'images'],
    ['sass', 'javascript'],
    'copy-index',
    'copy-assets',
  	cb
  );
});
