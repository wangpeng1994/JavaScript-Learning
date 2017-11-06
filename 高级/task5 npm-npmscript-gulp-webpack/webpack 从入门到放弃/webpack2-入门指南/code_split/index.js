// export import  可以通过不同的模块机制得到 split
// amd
// require

console.log('I am index')

// require.ensure(dependencies: String[], callback: function(require), chunkName: String)

//这里使用 CommonJS 因为更简单，webpack虽然支持不同的模块引入方式
require('./split.js');

//或者使用 ES6 的引入模块的形式, webpack2原生支持 ES6 的 import 语法，webpack1不支持，需要babel转码
//import * as Test from './split.js'

//或者使用 amd 规范
//define(['./split.js'],function(){})


//以上就是代码分块的演示,在index.js 中引入 split.js，最后通过 webpack 打包到一起 输出到 dist文件夹