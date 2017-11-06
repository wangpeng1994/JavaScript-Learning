var gulp = require('gulp')

var cssnano = require('gulp-cssnano') //压缩css的gulp插件
var concat = require('gulp-concat') //用来合并的gulp插件

//gulp.src | gulp.dest | gulp.task | gulp.watch

gulp.task('build:css', function(){
  return  gulp.src('./src/css/*.css')
    .pipe(concat('index-merge.css'))
    .pipe(cssnano())
    .pipe(gulp.dest('./dist/css'))
})

gulp.task('default') //如果想默认gulp后执行，除了将上面的css直接改为default，也可以再创建一个任务叫default，如此命令行只需要 gulp 即可

