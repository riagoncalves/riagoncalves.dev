var gulp = require('gulp');
var config = require('../config/replace');
var replace = require('gulp-replace');
var htmlreplace = require('gulp-html-replace');
var urlAdjuster = require('gulp-css-url-adjuster');
var handleErrors = require('../lib/handleErrors');

// css
var configSass = require('../config/sass');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var cssnano	= require('gulp-cssnano');

// javascript
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var configJS = require('../config/javascript');

var d = new Date();
var minutes = d.getMinutes();
var hours = d.getHours();
var day = d.getDate();
var month = d.getMonth();
var year = d.getFullYear();
var folder = hours + ':' + minutes + '_' + day + '-' + month + '-' + year;

gulp.task('replace', function() {
  gulp.src('index.html')
    .pipe(htmlreplace({
      cssInline: {
        src: gulp.src(configSass.src)
          .pipe(sass(configSass.settings))
          .on('error', handleErrors)
          .pipe(urlAdjuster({ replace: config.imagesCss }))
          .pipe(autoprefixer(configSass.autoprefixer))
          .pipe(cssnano()),
        tpl: '<style>%s</style>'
      },
      js: {
        src: gulp.src(configJS.src)
          .pipe(concat('main.min.js'))
          .pipe(uglify()),
        tpl: '<script>%s</script>'
      },
      remove: ''
    }))
    .pipe(replace(config.imagesHtml.string, config.imagesHtml.replacement))
    .pipe(gulp.dest('build/' + folder));
});
