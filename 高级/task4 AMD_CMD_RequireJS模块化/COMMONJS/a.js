var people = {
  name: 'xiaofeng',
  sayName: function(){
    console.log(this.name)
  }
}

// 下面是Node.js天然支持的 COMMONJS模块, 把people对象暴露出去
module.exports = people
//module.exports = 123
