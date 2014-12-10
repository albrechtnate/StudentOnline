var gulp = require('gulp'),
	gutil = require('gulp-util'),
	connect = require('gulp-connect'),
	sass = require('gulp-ruby-sass'),
	prefix = require('gulp-autoprefixer');

gulp.task('connect', function() {
  connect.server({
    root: 'bin/',
    livereload: true
  });
});

gulp.task('reload', function () {
  return gulp.src('bin/*.html')
    .pipe(connect.reload());
});

gulp.task('styles', function() {
	return gulp.src('bin/scss/*.scss')
	// Hack: Turning off sourcemaps til gulp-ruby-sass goes to 1.0.0
	// https://github.com/sindresorhus/gulp-autoprefixer/issues/20
	// http://stackoverflow.com/questions/26979433/gulp-with-gulp-ruby-sass-error-style-css-map31-unknown-word
	.pipe(sass({"sourcemap=none": true})).on('error', function(err){
		console.log('******** SASS ERROR' + err);
	})
	.pipe(prefix()).on('error', function(err){
		console.log('******** PREFIX ERROR' + err);
	})
    .pipe(gulp.dest('bin/css'))
	.on('end', function() {
		gulp.run('reload')
	});
});

gulp.task('watch', function () {
  gulp.watch(['bin/scss/*.scss'], ['styles']);
  gulp.watch(['bin/*.html'], ['reload']);
});

gulp.task('default', ['connect', 'styles'], function() {
	gulp.run('watch');
});