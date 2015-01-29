var gulp = require('gulp');

// Plugins
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');

// Utils
var handleErrors = require('../utils/error-handling');

var path = require('path');

var js = {
  // src: ['./src/js/**/*.js'],
  src: [
  	'./src/js/plugins/plugins.js',
  	'./src/js/modules/init-modules.js',
  	'./src/js/modules/module-b.js',
  	'./src/js/modules/module-a.js',
  	'./src/js/core/app-main.js'
  ],
  dst: path.resolve('assets', 'js')
};

gulp.task('js', function () {
  return gulp.src(js.src)
 		.pipe(sourcemaps.init())
    .pipe(concat('app-main.min.js'))
    .pipe(uglify({mangle: false}))
    .on('error', handleErrors)
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(js.dst));
});
