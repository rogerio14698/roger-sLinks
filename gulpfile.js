const { src, dest, series, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

const prefix = require('gulp-autoprefixer');


function compSCSS() {
    return src('src/scss/**/*.scss')
        .pipe(sass())
        .pipe(prefix('last 2 versions'))
        .pipe(dest('build/css'))
}





function watchTask() {
    watch('src/scss/**/*.scss', compSCSS);
}

exports.default = series(compSCSS, watchTask);
