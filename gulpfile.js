var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer =require('gulp-autoprefixer');
gulp.task('comp', function(){
  return gulp.src('scss/*scss')
  .pipe(sourcemaps.init())
  .pipe(sass({errLogToConsole:true}))
  .pipe(sass({outputStyle:'expanded'}))
  .pipe(autoprefixer())
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('css'));
})

gulp.task('watch', function(){
  gulp.watch('scss/*.scss',['comp']);
})
