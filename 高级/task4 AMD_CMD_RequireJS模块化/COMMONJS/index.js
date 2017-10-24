//AMD 规范，也是requireJS的写法
require(['carousel', 'tab', 'lazy'], function(Carousel, Tab, Lazy){ //模块到了后，起个名字

  new Carousel()
  Tab.init()
  Lazy.init()

})


//COMMONJS规范
// var carousel = require('./carousel')
// new carousel('.ct')

// var tab = require('./tab')
// tab.init()

// var lazy = require('./lazy')
// lazy.init('', function(){

// })


//下面是CMD规范，和COMMONJS很像，也就是SeaJS的写法（基本已经废弃，用requireJS就好，两者有相互扩充，当然用了webpack，requireJS也可以不用了，以后的发展一定是越来越统一，最后和写Node.js感觉很类似）

define(function(require, exports, modules){
  var p = require('./a') //用到什么加载什么
  console.log(p)
  modules.exports = 123
})