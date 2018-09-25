var gulp = require('gulp'),
postcss =require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import');

gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/styles.css') //return as gulp is an async task RETURN says it needs to first fully load before handing it over
  .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
  .on('error', function(errorInfo) { //errorInfo is the 'error' that is passed into the function
    console.log(errorInfo.toString()); //.toString() makes it that the error is possible to read out (as in create react app)
    this.emit('end');  // this as in THIS TASK || emit (inform ) to the above tasks to ('end') it (THIS COMMENT REFERENCES this.emit.('end');)
  })
  .pipe(gulp.dest('./app/temp/styles'));

});
