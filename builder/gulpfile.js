
// devDependencies
const gulp = require('gulp'),


        // TOOLS
            gulp_rename = require('gulp-rename'),
            gulp_plumber  = require('gulp-plumber'),
            gulp_sourcemaps  = require('gulp-sourcemaps'),
            notifier = require('node-notifier');
            gulp_notify = require('gulp-notify'),
            gulp_clean = require('gulp-clean'),
            gulp_browsersync = require('browser-sync').create(),


        // CSS
            gulp_sass  = require('gulp-sass'),
            gulp_autoprefixer  = require('gulp-autoprefixer'),
            gulp_cssnano  = require('gulp-cssnano'),

           //JS
            browserify = require('browserify'),
            babelify = require('babelify'),
            buffer = require('vinyl-buffer'),
            source = require('vinyl-source-stream'),
            es2015 = require('babel-preset-es2015'),
            gulp_uglify=require('gulp-uglify'),

            // IMAGES
            gulp_imagemin=require('gulp-imagemin'),


            // SHELL
            gulp_shell = require('gulp-shell');


// INIT

  // CONFIG
  const config = {
      dist:'../dist/',
      src:'../src/',
      assets:'../dist/assets/'
  }

  // GULP
  gulp.task('default', gulp.series(clean, gulp.parallel(browsersync,fonts,sass,html,js,images,watch), () => {

  }));


  function gulp_reload(done) {
      gulp_browsersync.reload()
      done();
  }

  // WATCH FILES CHANGE
  function watch() {
      gulp.watch(config.src+'styles/**/*.scss', gulp.series(sass,gulp_reload));
      gulp.watch(config.src+'js/**/*.js', gulp.series(js,gulp_reload));
      gulp.watch(config.src+'views/**/**.html', gulp.series(html,gulp_reload));
  };

// BROWSER SYNC & LAUNCH
function browsersync() {
  gulp_browsersync.init({
        server: {
            baseDir: '../dist/'
        }
    });
}

// CLEAN DIST
function clean() {
    return gulp.src('../dist/', {read: false})
        .pipe(gulp_clean({force:true}))
}

// GULP TASKS

  // move fonts to dist
  function fonts() {
      return gulp.src(config.src+'fonts/**/**')
      .pipe(gulp.dest(config.assets+'fonts'))
  }

  // minimify images
  function images() {
      gulp.src(config.src+'img/**')
          .pipe(gulp_imagemin())
          .pipe(gulp.dest(config.assets+'img'));
  }

  // SASS --> CSS --> Autoprefix --> Rename
  function sass() {
      return gulp.src(config.src+'styles/main.scss')
          .pipe(gulp_plumber({
              errorHandler: gulp_notify.onError('SASS Error: <%= error.message %>')
          }))
          .pipe(gulp_sourcemaps.init())
          .pipe(gulp_sass().on('error', gulp_sass.logError))
          .pipe(gulp_autoprefixer({
              browsers:['last 2 versions']
          }))
          .pipe(gulp_cssnano())
          .pipe(gulp_sourcemaps.write())
          .pipe(gulp_rename('main.min.css'))
          .pipe(gulp.dest(config.assets+'css'))
          .pipe(gulp_notify('SASS compiled: <%= file.relative %>'))
  }

  // All js --> One js --> Uglify



    function html() {
        return gulp.src(config.src+'views/*.html')
        .pipe(gulp.dest(config.dist))
        .pipe(gulp_notify('HTML updated'))
        .pipe(pages());
    }

    function pages() {
        return gulp.src(config.src+'views/pages/**.html')
        .pipe(gulp.dest(config.dist+"/pages"))
        .pipe(gulp_notify('Pages has been updated'));
    }

    function js() {
     return (browserify(config.src+'js/main.js', { debug: true }).transform(babelify, {presets:[es2015]}).bundle())
        .on('error', gulp_notify.onError(function (error) {
            return "Message to the notifier: " + error.message;
        }))
        .pipe(source('main.js'))
        .pipe(buffer())
        .pipe(gulp_sourcemaps.init())
        .pipe(gulp_uglify())
        .pipe(gulp_sourcemaps.write())
        .pipe(gulp_rename('main.min.js'))
        .pipe(gulp.dest(config.assets+'js/'))
        .pipe(gulp_notify('JS compiled'));
  }
