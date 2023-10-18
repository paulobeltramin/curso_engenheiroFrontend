
const gulp = require("gulp")
const sass = require("gulp-sass")(require("sass"))
const uglify = require("gulp-uglify")
const images = require("gulp-imagemin")



// compilar sass
function compilasass() {

     return gulp.src("./src/style/*.scss")
          .pipe(sass({
               outputStyle: "compressed"
          }))
          .pipe(gulp.dest("./build/styles"))
}


//   javascript
function comprimirJs() {
     return gulp.src("./src/scripts/*.js")
          .pipe(uglify())
          .pipe(gulp.dest("./build/scripts"))
}


// images
function comprimirImages() {
     return gulp.src("./src/images/*")
          .pipe(images())
          .pipe(gulp.dest("./build/images"))
}


// exports
exports.default = function () {
     gulp.watch("./src/style/*.scss", { ignoreInitial: false }, gulp.series(compilasass))
     gulp.watch("./src/scripts/*.js", { ignoreInitial: false }, gulp.series(comprimirJs))
     gulp.watch("./src/images/*", { ignoreInitial: false }, gulp.series(comprimirImages))
}