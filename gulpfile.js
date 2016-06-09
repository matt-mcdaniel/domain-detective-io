var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var routes = require('./server/routes');
var express = require('express');
const config = require('./server/config');

var app = express();

var ENV = process.env.NODE_ENV;

// build public/main.css
gulp.task('styles', function() {
    console.log('Building styles...');
    
    gulp.src(['app/main.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest('public'))
        .pipe(browserSync.stream());
        
    browserSync.reload();
});

// watch for scss changes
gulp.task('serve', ['styles'], function() {
    require('chokidar-socket-emitter')({port: 8090});
    
    config(app, '/');

    routes(app);
    
    app.listen(3000, (err) => {
        if (err) console.warn(err);
    });
    
    browserSync.init({
        port: 3000,
        open: false,
        reloadOnRestart: true,
        notify: false,
        proxy: {
            target: 'http://localhost:3000'
        }
    });
    
    gulp.watch('app/**/*.scss', ['styles']);
    
});

//NODE_ENV=development
gulp.task('development', ['serve']);

//NODE_ENV=production
gulp.task('production', ['styles']);

gulp.task('default', 
    [ENV === 'prod' ? 'production' : 'development']
);