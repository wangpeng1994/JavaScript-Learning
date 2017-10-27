var a = 1
console.log(a)

var sayHello = require('./a').sayHello //注意 ./a 可以是 ./a.js 不能是 a 或 a.js
sayHello('xiaofeng')

var marked = require('marked') //require时，默认从当前目录的node_modules找模块，一直往上找到家目录
var str = marked('# hello')
console.log(str)