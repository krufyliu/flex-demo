'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var csscomb = require('gulp-csscomb');
var minify = require('gulp-minify-css');

gulp.task('sass', function () {
  gulp.src('./styles/main.scss')
    .pipe(sass())
    .pipe(prefix())
    .pipe(csscomb())
    //.pipe(minify())
    .pipe(gulp.dest('../styles'));
});

gulp.task('default', ['sass']);

gulp.task('watch', function () {
  gulp.watch(['../styles/*.scss'], ['sass']);
});