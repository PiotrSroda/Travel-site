var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', function() {

  browserSync.init({
    notify: false,
    open: false,
    server: {
      baseDir: "app"
    }

  })

  watch('./app/index.html', function() {
    browserSync.reload();
  });

  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('cssInject');

  });

  watch('./app/assets/scripts/**/*.js', function() {
    gulp.start('scriptsRefresh');
  })

});

gulp.task('cssInject', ['styles'], function() { // [] DEPENDENCIES !!!!!!! - First you must start AND complete STYLES is the DEPENDENCY of cssInject
  return gulp.src('./app/temp/styles/styles.css') //return as gulp is an async task RETURN says it needs to first fully load before handing it over
  .pipe(browserSync.stream());

})

gulp.task('scriptsRefresh', ['scripts'], function() { // [] DEPENDENCIES !!!!!!! - First you must start AND complete STYLES is the DEPENDENCY of cssInject
  browserSync.reload();

})
