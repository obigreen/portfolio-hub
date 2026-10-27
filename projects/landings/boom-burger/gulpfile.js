'use strict';

const {rmSync} = require('node:fs');
const {src, dest, watch, series, parallel} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCss = require('gulp-clean-css');
const rename = require('gulp-rename');

const paths = {
    styles: 'src/styles/**/*.scss',
    styleEntry: 'src/styles/main.scss',
    slickRoot: 'node_modules/slick-carousel/slick',
    dist: 'dist',
};

function clean(done) {
    rmSync(paths.dist, {recursive: true, force: true});
    done();
}

function styles() {
    return src(paths.styleEntry)
        .pipe(sass.sync({style: 'expanded'}).on('error', sass.logError))
        .pipe(cleanCss({level: 2}))
        .pipe(rename('style.min.css'))
        .pipe(dest(paths.dist));
}

function slickStyles() {
    return src([
        `${paths.slickRoot}/slick.css`,
        `${paths.slickRoot}/slick-theme.css`,
    ]).pipe(dest(paths.dist));
}

function slickAssets() {
    return src([
        `${paths.slickRoot}/ajax-loader.gif`,
        `${paths.slickRoot}/fonts/*`,
    ], {base: paths.slickRoot, encoding: false}).pipe(dest(paths.dist));
}

const build = series(clean, parallel(styles, slickStyles, slickAssets));

function dev() {
    return watch(paths.styles, styles);
}

exports.clean = clean;
exports.styles = styles;
exports.build = build;
exports.dev = series(build, dev);
exports.default = exports.dev;
