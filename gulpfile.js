var gulp = require('gulp'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

var paths = {
    js: './js/',
    main: './public/js/main.js',
    mainDev: 'main.dev.js',
    mainProd: 'main.min.js'
};

gulp.task('watch', ['browserify'], function() {
    gulp.watch(["public/js/modules/**/*.js","public/js/main.js"], ["browserify"]);
});

gulp.task('browserify', function() {
    return browserify(paths.main)
        .bundle()
        .pipe(source(paths.mainDev))
        .pipe(gulp.dest(paths.js));
});

/*gulp.task('min-js', function() {
    gulp.src(paths.js+paths.mainDev)
        .pipe(uglify())
        .pipe(rename(paths.js+paths.mainProd))
        .pipe(gulp.dest("./"));
});*/

gulp.task('default', ['watch']);