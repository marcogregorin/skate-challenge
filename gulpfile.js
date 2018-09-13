var gulp = require('gulp');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');

// CREATE A DEFAULT TASK
gulp.task('default', function(){
  console.log('this is the default task');
});

// SASS IT
gulp.task('styles', function(){
  return gulp.src('./assets/scss/main.scss')
    .pipe(autoprefixer())
    .pipe(sass())
    .pipe(gulp.dest('./dist/css')
  );
});
// MINIFY STYLES
gulp.task('minify', function(){
  return gulp.src('./dist/css/main.css')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(rename({suffix: ".min"}) )
    .pipe(gulp.dest('./dist/css')
  );
});

// SET UP WATCH
gulp.task('watch', function(){

  watch('./assets/scss/*.scss', function(){
    gulp.start('styles');
    gulp.start('minify');
  });

});
