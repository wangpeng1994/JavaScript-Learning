var gulp = require('gulp')

//引入组件
var cssnano = require('gulp-cssnano'), //CSS压缩
  //autoprefixer = require('gulp-autoprefixer'), //后编译，自动添加css兼容前缀
  uglify = require('gulp-uglify'), //js压缩
  concat = require('gulp-concat'), //合并文件

  rename = require('gulp-rename'), //重命名
  clean = require('gulp-clean'), //清空文件夹

  htmlmin = require('gulp-htmlmin'), //html压缩
  //jshint = require('gulp-jshint'), //js代码规范性检查
  imagemin = require('gulp-imagemin'), //图片压缩

  rev = require('gulp-rev'), //添加版本号
  revReplace = require('gulp-rev-replace'), //版本号替换
  useref = require('gulp-useref'); //解析html资源定位


gulp.task('dist:css', function(){
  gulp.src('dist/css/*').pipe(clean()) //可以每次执行前，清空对应目录的旧文件，以免文件名变了后，无法覆盖
  return gulp.src('src/css/*.css')
    .pipe(concat('merge.min.css'))
    // .pipe(rename({  //重命名
    //   basename: '',
    //   prefix: 'merge',
    //   suffix: '.min',
    //   extname: '.css'
    // }))
    .pipe(cssnano())
    .pipe(autoprefixer({
      browsers: ['last 10 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('dist/css'))
})

gulp.task('dist:js', function(){
  gulp.src('dist/js/*').pipe(clean())
  return gulp.src('src/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default')) //检查如果出错，则在命令行以默认样式输出报告

    .pipe(concat('merge.min.js'))
    // .pipe(rename({
    //   suffix: '.min'
    // }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js/'))
})

gulp.task('dist:img', function(){
  return gulp.src('src/imgs/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/imgs'))
})

gulp.task('revision', ['dist:css', 'dist:js'], function(){
  return gulp.src(['dist/**/*.css', 'dist/**/*.js'])
    .pipe(rev())  //取出css 和 js加入版本号
    .pipe(gulp.dest('dist'))
    .pipe(rev.manifest()) //生成 rev-manifest.json（映射证明）
    .pipe(gulp.dest('dist'))
})

gulp.task('html', ['revision'], function(){
  var manifest = gulp.src('dist/rev-manifest.json')
  return gulp.src('src/*.html')
    .pipe(revReplace({   //根据映射 替换html中的引用注释
      manifest: manifest
    }))
    .pipe(useref()) //启用注释中的路径做引用替换
    .pipe(gulp.dest('dist'))

    //.pipe(htmlmin({collapseWhitespace: true})) //压缩 html 删除空格 默认 false
    .pipe(gulp.dest('dist'))
})

gulp.task('clean', function(){
  return gulp.src('dist/*', {read: false}) //Option read:false prevents gulp from reading the contents of the file and makes this task a lot faster.
    .pipe(clean())
})

gulp.task('build', ['html', 'dist:css', 'dist:js', 'dist:img', 'revision']) // 或者把 build 改为 default