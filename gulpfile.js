// Gulp and plugins
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const child = require('child_process');
const cssnano = require('gulp-cssnano');
const gulp = require('gulp');
const gutil = require('gulp-util');
const imagemin = require('gulp-imagemin');
const notify = require('gulp-notify');
const sass = require('gulp-sass');
const sasslint = require('gulp-sass-lint');
const sourcemaps = require('gulp-sourcemaps');
const ts = require('gulp-typescript');

// Build variables
const cssOutputDir = 'css';
const imageDir = 'img/*';
const imagesOutputDir = 'images';
const jsOutputDir = 'js';
const jsOutputFile = 'aa.js';
const scssFiles = 'scss/**/*.?(s)css';
const siteRoot = '_site';
const tsFiles = 'ts/**/*.ts'

//
// Compile CSS (SCSS), minifying and creating a source map in the process
//
gulp.task('css', () => {
    gulp.src(scssFiles)
        .pipe(sasslint({
            options: {
                formatter: 'stylish',
                'merge-default-rules': false
            },
            files: {
                ignore: ['scss/bourbon/**/*.*', 'scss/neat/**/*.*', 'scss/base/**/*.*']
            },
            configFile: './.scss-lint.yml'
        }))
        .pipe(sasslint.format())
        .pipe(sasslint.failOnError())
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.init())
        .pipe(cssnano())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(cssOutputDir))
        .pipe(notify("CSS task complete"));
});

//
// Compress images
//
gulp.task('images', () => {
    gulp.src(imageDir)
        .pipe(imagemin())
        .pipe(gulp.dest(imagesOutputDir))
        .pipe(notify("Images task complete"));
});

//
// Compile and run Jekyll, watchign for changes
//
gulp.task('jekyll', () => {
    const jekyll = child.spawn('jekyll', ['build',
        '--watch',
        '--incremental',
        '--drafts'
    ]);

    const jekyllLogger = (buffer) => {
        buffer.toString()
            .split(/\n/)
            .forEach((message) => gutil.log('Jekyll: ' + message));
    };

    jekyll.stdout.on('data', jekyllLogger);
    jekyll.stderr.on('data', jekyllLogger);
});

//
// Compile JS (TypeScript)
//
gulp.task('js', () => {
    gulp.src(tsFiles)
        .pipe(ts({
            noImplicitAny: true,
            out: jsOutputFile
        }))
        .pipe(gulp.dest(jsOutputDir))
        .pipe(notify("JS task complete"));
});

//
// Serve files up using BrowserSync
//
gulp.task('serve', () => {
    browserSync.init({
        files: [siteRoot + '/**'],
        port: 4000,
        server: {
            baseDir: siteRoot
        }
    });

    gulp.watch(scssFiles, ['css']);
});

//
// Default task. Essentially, run everything when 'gulp' is executed
//
gulp.task('default', ['css', 'js', 'images', 'jekyll', 'serve']);
