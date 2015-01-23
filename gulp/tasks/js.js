var gulp = require('gulp');

// Plugins
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');

// Utils
var handleErrors = require('../utils/error-handling');

var path = require('path');

var js = {
  src: ['./src/js/**/*.js'],
  dst: path.resolve('assets', 'js')
};

gulp.task('js', function () {
  return gulp.src(js.src)
 		.pipe(sourcemaps.init())
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .on('error', handleErrors)
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(js.dst));
});
