const {src, dest, series} = require('gulp')
const del = require('del')
const gulpSass = require('gulp-sass')
const cleanCSS = require('gulp-clean-css')
const cleanJs = require('gulp-clean')
const concat = require('gulp-concat')
const minify = require('gulp-minify')
const concatCss = require('gulp-concat-css')

function sass(){
    return src([ "src/CSS/style.scss", "node_modules/bootstrap/scss/bootstrap.scss",])
        .pipe(gulpSass())
        .pipe(concatCss("new.min.css"))
        .pipe(cleanCSS())
        .pipe(dest('public/CSS'))

}

function minBootstrapJs(){
    return src(["node_modules/jquery/dist/jquery.min.js","node_modules/bootstrap/dist/js/bootstrap.min.js"])
        .pipe(concat({path:'new.js'}))
        .pipe(minify())
        .pipe(dest('public/Bootstrap'))

}


function minJs(){
    return src(["src/JS/main.js", "src/JS/particles.js", "src/JS/app.js"])
        .pipe(concat({path:'new.js'}))
        .pipe(minify())
        .pipe(dest('public/JS'))
}

function clean(){
    return del('JS')
}
module.exports = {
    minJs,
    sass,
    default:series(clean, sass, minJs, minBootstrapJs)

}