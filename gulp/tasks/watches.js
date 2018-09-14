// WATCHES TASKS

var gulp = require('gulp');
var watch = require('gulp-watch');
var browserSync = require('browser-sync');

// SET UP WATCHES
gulp.task('watch', function(){

  // INITIALIZE BROWSER
  browserSync.init({
    notify: false,
    server: {
      baseDir: '.'
    }
  })

  // REFRESH BROWSER WHEN INDEX.HTML CHANGES
  watch('index.html', function(){
    browserSync.reload();
  });

  // RUN STYLES & MINIFY
  gulp.watch('./assets/scss/**/*.scss', ['styles']);    // Call Styles Task
  gulp.watch('./dist/css/main.css', ['cssInject']);     // Call cssInject where has 'Minify' task as a dependency

})


// CSSINJECT - Refresh when css changes. It won't start untill Minify has ran
gulp.task('cssInject', ['minify'], function() {
  return gulp.src('./dist/css/main.min.css')
    .pipe(browserSync.stream());
});
