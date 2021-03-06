"use strict";

var gulp = require('gulp'),
	  concat = require('gulp-concat'),
	  uglify = require('gulp-uglify'),
	  rename = require('gulp-rename'),
	  sass = require('gulp-sass'),
	  maps = require('gulp-sourcemaps'),
	  del = require('del'),
	  autoprefixer = require('gulp-autoprefixer'),
	  browserSync = require('browser-sync').create(),
	  htmlreplace = require('gulp-html-replace'),
	  cssmin = require('gulp-cssmin');

gulp.task("concatScripts", function() {
	return gulp.src([
		'assets/js/vendor/jquery-3.2.1.slim.min.js',
		'assets/js/vendor/popper.min.js',
		'assets/js/vendor/bootstrap.min.js',
		'assets/js/owl.carousel.js',
		'assets/js/functions.js'
	])
		.pipe(maps.init())
		.pipe(concat('main.js'))
		.pipe(maps.write('./'))
		.pipe(gulp.dest('assets/js'))
		.pipe(browserSync.stream());
});

gulp.task("minifyScripts", ["concatScripts"], function() {
  return gulp.src("assets/js/main.js")
	  .pipe(uglify())
	  .pipe(rename('main.min.js'))
	  .pipe(gulp.dest('js'));
});


gulp.task("minifyCss", ["compileSass"], function() {
  return gulp.src("css/main.css")
    .pipe(cssmin())
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest('css'));
});



gulp.task('clean', function() {
  del(['dist', 'css/main.css*', 'js/main*.js*']);
});

gulp.task('renameSources', function() {
  return gulp.src(['*.html', '*.php'])
    .pipe(htmlreplace({
      'js': 'js/main.min.js',
      'css': 'css/main.min.css'
    }))
    .pipe(gulp.dest('./'));
});

gulp.task("build", ['minifyScripts', 'minifyCss'], function() {
  return gulp.src([
		'*.html',
		'*.php',
		'favicon.ico',
		"assets/img/**"
	], { base: './'})
		.pipe(gulp.dest('./'));
});

gulp.task('compileSass', function() {
  return gulp.src("sass/main.scss")
    .pipe(maps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(maps.write('./'))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.stream());
});


gulp.task('watchFiles', function() {
  gulp.watch('sass/**/*.scss', ['compileSass']);
  gulp.watch('assets/js/*.js', ['concatScripts']);
});

gulp.task('serve', ['watchFiles'], function(){
  browserSync.init({
  	server: "./"
  });

  gulp.watch("sass/**/*.scss", ['watchFiles']);
  gulp.watch(['*.html', '*.php']).on('change', browserSync.reload);
});

gulp.task("default", ["clean", 'build'], function() {
  gulp.start('renameSources');
});
