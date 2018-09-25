var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', function() {

  browserSync.init({
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

});

gulp.task('cssInject', ['styles'], function() { // [] DEPENDENCIES !!!!!!! - First you must start AND complete STYLES is the DEPENDENCY of cssInject
  return gulp.src('./app/temp/styles/styles.css') //return as gulp is an async task RETURN says it needs to first fully load before handing it over
  .pipe(browserSync.stream());

})
