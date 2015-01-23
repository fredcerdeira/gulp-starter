var gulp = require('gulp');
var sass = require('gulp-ruby-sass');

var path = require('path');

// Utils
var handleErrors = require('../utils/error-handling');

var sassFiles = {
  src: path.resolve('src/sass', 'main.scss'),
  dst: path.resolve('assets', 'css')
};

console.log(sassFiles.src);

gulp.task('sass', function () {
  gulp.src(sassFiles.src)
    .pipe(sass({
      sourcemapPath: '../sass',
      style: 'compressed'
    }))
    // .on('error', function (err) { console.log(err.message); }) ---must understand why this fail
    .on('error', handleErrors)
    .pipe(gulp.dest(sassFiles.dst));
});
