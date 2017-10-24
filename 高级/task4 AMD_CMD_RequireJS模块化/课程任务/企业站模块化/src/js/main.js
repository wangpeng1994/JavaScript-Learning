requirejs.config({
  baseUrl: './src/js',
  paths: {
    'jquery': 'lib/jquery/jquery.min'
  }
})

//加载入口模块
requirejs(['app/index'])