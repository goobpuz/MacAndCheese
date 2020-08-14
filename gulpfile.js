// Include gulp
var gulp = require('gulp');
// Include Our Plugins
var jshint = require('gulp-jshint');
var postcss = require('gulp-postcss');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var autoprefixer = require('autoprefixer');
var gutil = require('gulp-util');
// Lint Task
gulp.task('lint', function() {
	return gulp
		.src('assets/js/functions.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});
gulp.task('css', function() {
	var processors = [autoprefixer({ browsers: ['last 2 versions'] })];
	return gulp
		.src('assets/scss/**/*.scss')
		.pipe(
			sass({
				outputStyle: 'compressed'
			}).on('error', sass.logError)
		)
		.pipe(postcss(processors))
		.pipe(concat('style.css'))
		.pipe(gulp.dest('./'));
});
// Concatenate & Minify JS
gulp.task('scripts', function() {
	return gulp
		.src('assets/js/functions.js')
		.pipe(uglify({ mangle: false }))
		.on('error', function(err) {
			gutil.log(gutil.colors.red('[Error]'), err.toString());
		})
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest('assets/js/min'));
});
// Watch task
// Watch for changes to any JS or SCSS files & run default gulp task
gulp.task('watch', function() {
	gulp.watch('assets/js/functions.js', gulp.series('lint', 'scripts'));
	gulp.watch('assets/scss/**/*.scss', gulp.series('css'));
});
// Extend default Gulp task
gulp.task('default', gulp.parallel('lint', 'css', 'scripts', 'watch'));