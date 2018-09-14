var gulp = require('gulp');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var browserSync = require('browser-sync');

// CREATE A DEFAULT TASK
gulp.task('default', function(){
  console.log('this is the default task');
});

// SASS IT
gulp.task('styles', function(){
  return gulp.src('./assets/scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
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

// SET UP WATCHES
gulp.task('watch', function(){

  // INITIALIZE BROWSER
  browserSync.init({
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

//
gulp.task('cssInject', ['minify'], function() {
  return gulp.src('./dist/css/main.min.css')
    .pipe(browserSync.stream());
});
