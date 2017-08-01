var gulp = require('gulp');
var sass = require('gulp-sass');

var jade = require('gulp-jade');
var minifyCSS = require('gulp-csso');

gulp.task('sass', function(){
  return gulp.src('scss/*.scss')
    .pipe(sass({outputStyle: "compressed"}).on("error", sass.logError))
    .pipe(minifyCSS())
    .pipe(gulp.dest('assets/css'))

});



gulp.task('default', ['sass' ]);




gulp.task('jade', function(){
    gulp.src('./src/*.jade')
    .pipe(jade({
        pretty: true
    }))
    .pipe(gulp.dest('./assets'))
})
