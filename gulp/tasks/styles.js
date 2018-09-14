// STYLES TASKS

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');

// SASS IT
gulp.task('styles', function(){
  return gulp.src('./assets/scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .on('errror', function(errorInfo){
      console.log(errorInfo.toString());
      this.emit('end');
    })
    .pipe(gulp.dest('./dist/css')
  );
});

// MINIFY STYLES
gulp.task('minify', function(){
  return gulp.src('./dist/css/main.css')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(rename({suffix: ".min"}) )
    .pipe(gulp.dest('./dist/css')
  );
});
