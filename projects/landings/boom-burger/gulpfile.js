'use strict';

const {rmSync} = require('node:fs');
const {src, dest, watch, series, parallel} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');

const paths = {
    styles: 'src/styles/**/*.scss',
    styleEntry: 'src/styles/main.scss',
    jquery: 'node_modules/jquery/dist/jquery.min.js',
    slickRoot: 'node_modules/slick-carousel/slick',
    dist: 'dist',
};

function clean(done) {
    rmSync(paths.dist, {recursive: true, force: true});
    done();
}

function styles() {
    return src(paths.styleEntry)
        .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
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

function vendorScripts() {
    return src([
        paths.jquery,
        `${paths.slickRoot}/slick.min.js`,
    ]).pipe(dest(paths.dist));
}

const build = series(clean, parallel(styles, slickStyles, slickAssets, vendorScripts));

function dev() {
    return watch(paths.styles, styles);
}

exports.clean = clean;
exports.styles = styles;
exports.build = build;
exports.dev = series(build, dev);
exports.default = exports.dev;
