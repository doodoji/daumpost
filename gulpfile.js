var gulp = require( 'gulp' ),
	jshint = require( 'gulp-jshint' ),
	uglify = require( 'gulp-uglify' ),
	rename = require( 'gulp-rename' ),
	connect = require( 'gulp-connect-multi' )();

gulp.task( 'build', function () {
	gulp.src( 'js/jquery.daumpost.js' )
		.pipe( jshint() )
		.pipe( uglify() )
		.pipe( rename( { suffix: '.min' } ) )
		.pipe( gulp.dest( 'js' ) )
		.pipe( connect.reload() );
});

gulp.task( 'serve-dev', function() {
	connect.server({
		root: [ 'test', 'js' ],
		port: 1337,
		livereload: true,
		open: {
			file: 'dev.html',
			browser: 'Google Chrome'
		}
	})();

	gulp.watch( 'js/*.js', function() {
		gulp.src( 'js/*.js' )
			.pipe( connect.reload() );
	});
});

gulp.task( 'serve', function() {
	connect.server({
		root: [ 'test', 'js' ],
		port: 1338,
		livereload: true,
		open: {
			browser: 'Google Chrome'
		}
	})();

	gulp.watch( 'js/*.js', [ 'build' ]);
});

gulp.task( 'default', [ 'build' ] );
