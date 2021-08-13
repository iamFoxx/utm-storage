// Defining requirements
var gulp = require( 'gulp' );
var plumber = require( 'gulp-plumber' );
var babel = require( 'gulp-babel' );
var rename = require( 'gulp-rename' );
var concat = require( 'gulp-concat' );
var uglify = require( 'gulp-uglify' );
var imagemin = require( 'gulp-imagemin' );
var sourcemaps = require( 'gulp-sourcemaps' );
var browserSync = require( 'browser-sync' ).create();
var del = require( 'del' );
const rev = require('gulp-rev');

// Configuration file to keep your code DRY
var cfg = require( './gulpconfig.json' );
var paths = cfg.paths;


// Run:
// gulp compile.
// Uglifies and concat all JS files into one
gulp.task( 'compile', function() {
    var scripts = [
        paths.dev + '/*.js',
    ];
    gulp
        .src( scripts, { allowEmpty: true } )
        .pipe( babel( { presets: ['@babel/preset-env'] } ) )
        .pipe( concat( 'utmstorage.min.js' ) )
        .pipe( uglify() )
        .pipe( gulp.dest( paths.dist ) );

    return gulp
        .src( scripts, { allowEmpty: true } )
        .pipe( babel() )
        .pipe( concat( 'utmstorage.js' ) )
        .pipe( gulp.dest( paths.dist ) );
} );
