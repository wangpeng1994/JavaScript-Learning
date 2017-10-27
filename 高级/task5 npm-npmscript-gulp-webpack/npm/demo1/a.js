function sayHello(name){
  console.log('hello ' + name)
}
//给 exports 对象绑定个属性sayHello  这里的exports对象 会被 别的require得到
exports.sayHello = sayHello