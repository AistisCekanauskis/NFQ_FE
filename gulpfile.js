var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('connect', function() {
    connect.server({
        root: 'web'
    });
});

gulp.task('html', function() {
    gulp.src('./web/*.html');
});

gulp.task('watch', function() {
    gulp.watch(['web/*.html'], ['html']);
});

gulp.task('default', ['connect', 'watch']);