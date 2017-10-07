const gulp = require('gulp'),
      gulp_shell = require('gulp-shell');

gulp.task('deploy', gulp.parallel(deployment), () => {

})

function deployment(){
  return gulp.src('readme.md', {read: false})
    .pipe(gulp_shell([
      'git subtree push --prefix dist origin gh-pages'
    ]))
}
