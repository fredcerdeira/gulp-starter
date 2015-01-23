var gulp = require('gulp');

var watch = {
  js:   ['src/js/**/*.js'],
  html: ['**/*.html'],
  sass: ['src/sass/**'],
  img:  ['src/img/**']
};

gulp.task('watch', ['browserSync'], function () {
  gulp.watch(watch.js, ['js']);
  gulp.watch(watch.sass, ['sass']);
});
