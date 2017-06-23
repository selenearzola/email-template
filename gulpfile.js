var gulp 		= require('gulp');
var browserSync 	= require('browser-sync').create();
var run 			= require('gulp-run');

gulp.task('render', function(){
	return run('mjml -r input.mjml -o public/index.html').exec()
});

gulp.task('update', function(){
	gulp.src('public/index.html').pipe(gulp.dest('public')).pipe(browserSync.stream())
});

gulp.task('watch', function() {
	browserSync.init({
		injectChanges: true,
		proxy: "local.email-creator.com",		
	});
	gulp.watch('input.mjml', ['render']);
	gulp.watch('public/index.html', ['update']).on("changes", browserSync.reload);
});
gulp.task('default', ['watch']);