({
  baseUrl: '.', //和main.js 指向同样 baseUrl，但build.js中是相对与当前目录，main.js中是相对于index.html
  paths: {
    'jquery': 'lib/jquery/jquery.min',
  },
  name: 'main',
  out: '../../dist/js/index.merge.min.js'
})