var gulp=require('gulp');
var postcss=require('gulp-postcss');
var lostgrid=require('lost');
gulp.task('styles',function(){
    gulp.src('source/css/main.css')
    .pipe(postcss([
        lostgrid()
    ]))
    .pipe(gulp.dest('public/css/'));
});
gulp.task('default',function(){
    gulp.start('styles');
    });
gulp.task('watch',function(){
    gulp.start("styles");
    gulp.watch(["source/css/main.css"],["styles"]);
    })