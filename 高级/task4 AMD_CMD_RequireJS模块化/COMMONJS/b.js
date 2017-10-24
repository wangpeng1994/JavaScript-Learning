//require 也是Node.js原生支持的
var p = require('./a') //这里是同步的，先读取到a.js 在执行，然后赋值给p
//console.log(p)
p.sayName()
console.log(p.name)
console.log('hello')


