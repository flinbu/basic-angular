var gulp = require('gulp'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    watch = require('gulp-watch'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    cleanCSS = require('gulp-clean-css'),
    browserSync = require('browser-sync').create();

//SASS
gulp.task('sass', function() {
  gulp.src('sass/app.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(rename('app.css'))
      .pipe(gulp.dest('assets/css'))
      .pipe(cleanCSS({compatibility : 'ie8'}))
      .pipe(rename('app.min.css'))
      .pipe(gulp.dest('assets/css'))
      .pipe(browserSync.stream());
});

//Angular
gulp.task('angular', function() {
  gulp.src([
    'node_modules/angular/angular.js',
    'node_modules/angular-route/angular-route.js',
    'node_modules/angular-animate/angular-animate.js',
    'node_modules/angular-aria/angular-aria.js',
    'node_modules/angular-messages/angular-messages.js',
    'node_modules/angular-material/angular-material.js',
    'node_modules/angular-scroll/angular-scroll.js'
  ]).pipe(concat('angular.js'))
    .pipe(gulp.dest('assets/js'))
    .pipe(rename('angular.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('assets/js'));
});

//APP
gulp.task('app', function () {
  gulp.src([
    //APP
    'app/app.js',
    //Services
    'app/services/**/*.js',
    //Factory
    'app/factory/**/*.js',
    //Filters
    'app/filters/**/*.js',
    //Controllers
    'app/controllers/**/*.js',
    //Directives
    'app/directives/**/*.js',
    //Theme
    'app/theme/**/*.js',
    //Components
    'app/components/**/*.js'
  ]).pipe(concat('app.js'))
    .pipe(gulp.dest('assets/js'))
    .pipe(rename('app.min.js'))
    .pipe(uglify({mangle:false}))
    .pipe(gulp.dest('assets/js'));
});

//Scripts
gulp.task('scripts', function () {
  gulp.src('scripts/**/*.js')
      .pipe(concat('scripts.js'))
      .pipe(gulp.dest('assets/js'))
      .pipe(rename('scripts.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest('assets/js'));
});

//Watch
gulp.task('watch', function () {
  //SASS
  gulp.watch('sass/**/*.scss', ['sass']);

  //APP
  gulp.watch('app/**/*.js', ['app']);

  //Scripts
  gulp.watch('scripts/**/*.js', ['scripts']);

  //Reload
  gulp.watch([
    'index.html',
    'templates/**/*.html',
    'assets/js/**/*.js',
  ]).on('change', browserSync.reload);
});

//Server
gulp.task('serve', ['sass', 'angular', 'app', 'scripts', 'watch'], function () {
  browserSync.init({
    notify: true,
    port: 6250,
    server : {
      baseDir : './'
    },
    // proxy : 'http://localhost/path/to/project'
  });
});

//Default
gulp.task('default', ['serve']);
