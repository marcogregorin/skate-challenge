var gulp = require('gulp');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

// CREATE A DEFAULT TASK
gulp.task('default', function(){
  console.log('this is the default task');
});

// SASS IT
gulp.task('styles', function(){
  return gulp.src('./assets/scss/main.scss')
    .pipe(autoprefixer())
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./dist/css')
  );
});

// SET UP WATCH
gulp.task('watch', function(){

  watch('./assets/scss/*.scss', function(){
    gulp.start('styles');
  });

});
