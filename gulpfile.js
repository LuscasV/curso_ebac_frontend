const gulp = require("gulp");
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify')
const obfuscate = require('gulp-obfuscate')
const imagemin = require('gulp-imagemin')

function compilaSass() {
    return gulp.src("./source/styles/*main.scss")
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(gulp.dest("./build/styles"))
}

function comprimeJavaScript(){
    return gulp.src("./source/scripts/*js")
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(gulp.dest("./build/scripts"))
}

function comprimeImagens(){
    return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest("./build/images"))
}

exports.sass = compilaSass;
exports.javascript = comprimeJavaScript;
exports.images = comprimeImagens;