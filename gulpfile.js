const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

//Complile scss into class
function style() {
  // 1. Where is my scss
  return gulp.src('./scss/**/*.scss')
  //2 . pass that file through sass compiler
  .pipe(sass().on('error', sass.logError))
  //3. Where do I save the complied css?
  .pipe(gulp.dest('./css'))
  // 4. Stream changes on all browserSync
  .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  gulp.watch('./scss/**/*.scss', style);
  gulp.watch('./**/*.html').on('change', browserSync.reload);
  gulp.watch('./**/*.css').on('change', browserSync.reload);
  gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;
