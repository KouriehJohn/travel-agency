var gulp = require('gulp'),
watch = require('gulp-watch');

 // When making multiple variables, you DONT have to add VAR every time, just add a comma and continue on as seen ABOVE!

gulp.task('default', function() {
  console.log("Hooray - you created a Gulp task");
});

gulp.task('html', function() {
  console.log('Imagine something useful being done to your HTML here.');
});

gulp.task('styles', function() {
  console.log('Imagine Sass or PostCSS tasks running here.');
});

gulp.task('watch', function() {

  watch('./app/index.html', function() {
    gulp.start('html');
    // This will WATCH for any changes made to the HTML file.
  });

  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('styles');
    // This will WATCH for any changes made to the CSS file.
  })

});
