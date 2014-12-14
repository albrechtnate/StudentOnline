var gulp = require('gulp'),
	gutil = require('gulp-util'),
	connect = require('gulp-connect'),
	sass = require('gulp-ruby-sass'),
	prefix = require('gulp-autoprefixer'),
	minifyCSS = require('gulp-minify-css'),
	jshint = require('gulp-jshint'),
	uglify = require('gulp-uglifyjs');

gulp.task('connect', function() {
	connect.server({
		root: 'build/',
		livereload: true
	});
});

function reload() {
	console.log("Reloading...");
	return gulp.src('build/*.html')
		.pipe(connect.reload());
}

gulp.task('buildTemplates', function() {
	console.log("Processing Templates");
	gulp.src('app/**/*.html')
	.pipe(gulp.dest('build'))
	.on('end', function() {
		reload();
	});
});

gulp.task('styles', function() {
	console.log("Processing Styles");
	return gulp.src('app/scss/*.scss')
	// Hack: Turning off sourcemaps til gulp-ruby-sass goes to 1.0.0
	// https://github.com/sindresorhus/gulp-autoprefixer/issues/20
	// http://stackoverflow.com/questions/26979433/gulp-with-gulp-ruby-sass-error-style-css-map31-unknown-word
	.pipe(sass({"sourcemap=none": true, "quiet": true})).on('error', function(err){
		console.log('******** SASS ERROR' + err);
	})
	.pipe(prefix())
	.pipe(minifyCSS())
	.pipe(gulp.dest('build/'))
	.on('end', function() {
		reload();
	});
});

gulp.task('scripts', function() {
	console.log("Processing Javascript");
	gulp.src('app/js/custom/*.js')
	.pipe(jshint())
	.pipe(jshint.reporter('default'));
	gulp.src('app/js/+(vendor|foundation)/*.js')
	.pipe(uglify("jsdependencies.js"))
	.pipe(gulp.dest('build/'));
	gulp.src('app/js/custom/*.js')
	.pipe(uglify("app.js"))
	.pipe(gulp.dest('build/'))
	.on('end', function() {
		reload();
	});
});

gulp.task('default', ['connect', 'buildTemplates', 'styles', 'scripts'], function() {
	gulp.watch('app/**/*.html', ['buildTemplates']);
	gulp.watch('app/scss/**/*.scss',['styles']);
	gulp.watch('app/js/**/*.js',['scripts']);
	console.log("\x1b[42mReady to Work\x1b[0m");
	return reload();
});