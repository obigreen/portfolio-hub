const { rmSync } = require("node:fs");
const { src, dest, series, parallel, watch } = require("gulp");
const browserSync = require("browser-sync").create();
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const sass = require("gulp-sass")(require("sass"));

const paths = {
  html: "src/**/*.html",
  styles: "src/scss/**/*.scss",
  scripts: "src/js/**/*.js",
  images: "src/assets/images/**/*",
  fonts: "src/assets/fonts/**/*",
  dist: "dist",
};

function clean(done) {
  rmSync(paths.dist, { recursive: true, force: true });
  done();
}

function markup() {
  return src(paths.html).pipe(dest(paths.dist));
}

function styles() {
  return src("src/scss/main.scss", { sourcemaps: true })
    .pipe(sass.sync({ outputStyle: "expanded" }).on("error", sass.logError))
    .pipe(postcss([autoprefixer()]))
    .pipe(dest(`${paths.dist}/css`, { sourcemaps: "." }))
    .pipe(browserSync.stream());
}

function scripts() {
  // The historical animation runtime depends on globals and file order.
  // Keep vendor code isolated in src/js/vendor and copy sources unchanged.
  return src(paths.scripts).pipe(dest(`${paths.dist}/js`));
}

function images() {
  return src(paths.images, { encoding: false }).pipe(
    dest(`${paths.dist}/img`)
  );
}

function fonts() {
  return src(paths.fonts, { encoding: false }).pipe(
    dest(`${paths.dist}/fonts`)
  );
}

const build = series(clean, parallel(markup, styles, scripts, images, fonts));

function reload(done) {
  browserSync.reload();
  done();
}

function serve() {
  browserSync.init({
    server: { baseDir: paths.dist },
    host: "127.0.0.1",
    port: 3100,
    open: false,
    notify: false,
    online: false,
    ui: false,
  });

  watch(paths.html, series(markup, reload));
  watch(paths.styles, styles);
  watch(paths.scripts, series(scripts, reload));
  watch(paths.images, series(images, reload));
  watch(paths.fonts, series(fonts, reload));
}

exports.clean = clean;
exports.build = build;
exports.default = series(build, serve);
