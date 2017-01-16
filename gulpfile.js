var gulp = require('gulp');
var sass = require('gulp-sass');
var notify = require('gulp-notify');

gulp.task('sass', function() {
	return gulp.src('./source/scss/style.scss')
			.pipe(sass())
			.on('error', notify.onError({title: 'Erro ao compilar', message: '<%= error.message %>'}))
			.pipe(gulp.dest('./dist/css'));
});

gulp.task('background', function() {
	gulp.watch('./source/scss/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'background']);

