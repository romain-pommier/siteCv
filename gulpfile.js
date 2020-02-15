const {src, dest, series} = require('gulp')
const del = require('del')
const gulpSass = require('gulp-sass')
const cleanCSS = require('gulp-clean-css')
const cleanJs = require('gulp-clean')
const concat = require('gulp-concat')
const minify = require('gulp-minify')
const concatCss = require('gulp-concat-css')

function sass(){
    return src(["node_modules/bootstrap/dist/css/bootstrap.min.css","src/CSS/style.scss"])
        .pipe(gulpSass())
        .pipe(concatCss("new.css"))
        .pipe(cleanCSS())
        .pipe(dest('public/CSS'))

}

function minBootstrapJs(){
    return src(["node_modules/bootstrap/dist/js/bootstrap.min.js"])
        .pipe(minify())
        .pipe(dest('public/Bootstrap'))

}
function minCss(){
    return src('public/CSS/*.css')
        .pipe(dest('public/CSS'))
}

function minJs(){
    return src('src/JS/*.js')
        .pipe(concat({path:'new.js'}))
        .pipe(minify())
        .pipe(dest('public/JS'))
}

function clean(){
    return del('JS')
}
module.exports = {
    minJs,
    default:series(clean, sass, minJs, minBootstrapJs)

}