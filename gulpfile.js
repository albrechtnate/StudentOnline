var gulp = require('gulp'),
	gutil = require('gulp-util'),
	connect = require('gulp-connect'),
	sass = require('gulp-sass'),
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

gulp.task('buildTemplatesInsertion', function() {
	console.log("Processing Template Instertions");
	gulp.src('app/templates/*.js')
	.pipe(gulp.dest('build/templates'))
	.on('end', function() {
		reload();
	});
});

gulp.task('buildResources', function() {
	console.log("Processing Resources");
	gulp.src('app/resources/**/*')
	.pipe(gulp.dest('build/resources'))
	.on('end', function() {
		reload();
	});
});

gulp.task('styles', function() {
	console.log("Processing Styles");
	return gulp.src('app/scss/*.scss')
	.pipe(sass()).on('error', function(err){
		console.log('******** Sass ERROR: ' + err);
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
	.pipe(uglify("jsdependencies.js").on('error', function(e) { console.log('\x07',e.message); return this.end(); }))
	.pipe(gulp.dest('build/'));
	gulp.src('app/js/custom/*.js')
	.pipe(uglify("app.js").on('error', function(e) { console.log('\x07',e.message); return this.end(); }))
	.pipe(gulp.dest('build/'))
	.on('end', function() {
		reload();
	});
});

gulp.task('default', ['connect', 'buildTemplates', 'buildTemplatesInsertion', 'buildResources', 'styles', 'scripts'], function() {
	gulp.watch('app/**/*.html', ['buildTemplates']);
	gulp.watch('app/templates/*.js', ['buildTemplatesInsertion']);
	gulp.watch('app/resources/**/*', ['buildResources']);
	gulp.watch('app/scss/**/*.scss',['styles']);
	gulp.watch('app/js/**/*.js',['scripts']);
	console.log("\x1b[42mReady to Work\x1b[0m");
	return reload();
});