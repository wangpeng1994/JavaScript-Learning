
const path =require('path');
let base = {
	  index:'./index.js?t=2',
   	  index1:'./index1.js'
};

//webpack2 提供了多种配置方案

module.exports = {
  entry:base,
  output: {
    //导出目录
  	path: path.resolve(__dirname, 'dist'),
    publicPath: "/output/dist/", //作为异步加载时候，路径的前缀 server-relative 最后在打包好的_index.js中构建script标签的src时，用这个参数作为拼接src的开头
  	//包规范格式 输出变成了一个包
  	libraryTarget:'umd', //umd是通用的规范 兼容了 CommonJS AMD 某规范 以及 挂在window上的形式（ window.["MyLibrary"] = factory();  ） 等
  	library: "MyLibrary", //var MyLibrary = xxx
    //文件名
  	chunkFilename:'[chunkhash]_[name].js',
    //hash位数 或者直接filename: [chunkhash:5]_[name].js
  	hashDigestLength:3,
    //导出文件 
    //hash ==> webpack编译过程 所以同一次编译的时候，hash一样
    // chunkhash ==> webpack对每个文件的hash
    filename: '_[name].js'
  }
};
