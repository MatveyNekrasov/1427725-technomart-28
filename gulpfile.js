'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cleancss = require('gulp-clean-css');
const rename = require("gulp-rename");
const browserSync = require('browser-sync').create();

gulp.task('style', function () {
    return gulp.src('./sass/style.scss')

        // output non-minified CSS file
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
        .pipe(postcss([autoprefixer()]))
        .pipe(gulp.dest('css'))

        // output the minified version
        // .pipe(cleancss())
        // .pipe(rename({ extname: '.min.css' }))
        // .pipe(gulp.dest('css'))
        .pipe(browserSync.stream());
});

gulp.task('watch', function () {
    browserSync.init({
        server: ".",
        ui: false,
        notify: false
    });
    gulp.series('style')();
    gulp.watch('sass/**/*.scss').on('change', gulp.series('style'));
    gulp.watch('*.html').on('change', browserSync.reload);
});

gulp.task('default', gulp.series('watch'));
