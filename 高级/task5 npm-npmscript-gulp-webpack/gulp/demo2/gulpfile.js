var gulp = require('gulp')

//引入组件 
//关于browser-sync 在gulp中的使用文档 https://browsersync.io/docs/gulp
var browserSync = require('browser-sync').create()
var fs = require('fs')

gulp.task('reload', function(){ //刷新页面
  browserSync.reload()
})

gulp.task('server', function(){ //静态服务器，基准目录为 src
  browserSync.init({
    server: {
      baseDir: "./src"
    }
  })
  //当gulp监听到这些文件变动的时候，就去执行 reload
  gulp.watch(['**/*.css', '**/*.js', '**/*.html'], ['reload']) 
})
