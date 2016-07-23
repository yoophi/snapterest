var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var paths = {
    js: ['./source/**/*.js']
};

gulp.task('default', function () {
    return browserify('./source/app.js')
        .transform(babelify)
        .bundle()
        .pipe(source('snapterest.js'))
        .pipe(gulp.dest('./build/'));
});

gulp.task('watch', function () {
    gulp.watch(paths.js, ['default']);
});