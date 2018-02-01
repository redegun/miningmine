var gulp = require('gulp');
var browserSync = require('browser-sync') .create();

gulp.task('serve', function() {
  return gulp.src('app/css/**/*.css')
  .pipe(browserSync.reload({stream: true}));
});

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: './app'

    },

    notify: false
  });
});

gulp.task('watch', ['browser-sync'], function() {
  gulp.watch('app/css/**/*.css' ['serve']);
  gulp.watch('app/*.html', browserSync.reload);
});

