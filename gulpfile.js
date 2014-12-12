var gulp = require('gulp'),
	gutil = require('gulp-util'),
	connect = require('gulp-connect'),
	sass = require('gulp-ruby-sass'),
	prefix = require('gulp-autoprefixer'),
	minifyCSS = require('gulp-minify-css');

gulp.task('connect', function() {
	connect.server({
		root: 'app/',
		livereload: true
	});
});

function reload() {
	console.log("Reloading!!");
	return gulp.src('app/*.html')
		.pipe(connect.reload());
}

gulp.task('styles', function() {
	return gulp.src('app/scss/*.scss')
	// Hack: Turning off sourcemaps til gulp-ruby-sass goes to 1.0.0
	// https://github.com/sindresorhus/gulp-autoprefixer/issues/20
	// http://stackoverflow.com/questions/26979433/gulp-with-gulp-ruby-sass-error-style-css-map31-unknown-word
	.pipe(sass({"sourcemap=none": true, "style": "nested"})).on('error', function(err){
		console.log('******** SASS ERROR' + err);
	})
	.pipe(prefix())
	.pipe(minifyCSS())
	.pipe(gulp.dest('app/'))
	.on('end', function() {
		reload();
	});
});

gulp.task('default', ['connect', 'styles'], function() {
	gulp.watch('app/scss/*.scss',['styles']);
	gulp.watch('app/*.html', function(event){
		reload();
	});
});