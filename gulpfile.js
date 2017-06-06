var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
browserSync = require('browser-sync').create();

 // When making multiple variables, you DONT have to add VAR every time, just add a comma and continue on as seen ABOVE!

gulp.task('default', function() {
  console.log("Hooray - you created a Gulp task");
});

gulp.task('html', function() {
  console.log('Imagine something useful being done to your HTML here.');
});

gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/styles.css')
  .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
  .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function() {

  browserSync.init({
    server: {
      baseDir: "app"
    }
  });

  watch('./app/index.html', function() {
    gulp.start('html');
    // This will WATCH for any changes made to the HTML file.
  });

  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('styles');
    // This will WATCH for any changes made to the CSS file.
  })

});
