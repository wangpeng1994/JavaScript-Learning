
//设计API
// 第一层结构： 模拟Jquery 声明 $  ，返回array
window.$ = function(){
  let array = []
  //省略
  return array
}
// 完成API：绑定个属性叫 bom，bom 是个对象，对象里面有个函数
$.bom = {
  openAtCenter: function(width, height, url){  //用来设置弹窗居中，并能指定宽高
    window.open(url, '_blank', `
      width=${width}px, height=${height}px,
      screenX=${screen.width/2-  width/2}px,
      screenY=${screen.height/2 - height/2}px
    `)
  },

  search: function(name, value){ //用来get search 或者 set search
    let searchAll = function(){  //使用 searchAll 对复用的代码进行函数封装，结果是 return 原本的search转化成的对象
      let result = {}
      let search = window.location.search
      // 首先去掉 ?
      if(search[0] === '?'){
        search = search.slice(1) //有? 则从下标1开始切割返回新字符串 a=wang&b=peng
      }
      //用 & 分隔成数组
      let searchArray = search.split('&') //["a=wang", "b=peng"]
      for(var i in searchArray){ //遍历数组
        let parts = searchArray[i].split('=') //再把数组每一项（&分隔）用=分隔成数组
       // console.log(parts)
        result[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1] || '') //设置对象的每个属性 键名和键值 ,取的时候，发现值是undefined，就 ''
      }
      return result // 返回对象 {a: "wang", b: "peng"}
      //decodeURIComponent() unicode转化成当前文字编码 %E4%BD%A0%E5%A5%BD ==> 你好
    }
    let result = searchAll()  //这里声明result，同时调用了 searchAll(),返回了对象，并赋值给 result, 下面就可以使用result对象了
    // 这样封装一下的意义，就是方面下面直接多次使用处理好了的对象
    if(value === undefined){ //如果只有一个参数，就是获取
      return result[name]
    }else{ //如果有第二个参数，value呢？ 就不是get，而是 set, 重新拼接 search
      result[name] = encodeURIComponent(value) //把传入的name 和value 设置成一组属性值，有重复的属性名，应该会重新覆盖
      let newSearch = '?'
      for(let key in result){ //接下来就是遍历所有的已有的和新传入的，统统遍历，用 ? 开头，&连接，最后结尾会有个 & ,但是不影响
        newSearch += `${encodeURIComponent(key)}=${encodeURIComponent(result[key])}&`
      }
      location.search = newSearch //重新设置location.search 的值
    }
  }


}
// 上面使用了ES6的模板字符串， `${}` 使用反引号，内部可以嵌入表达式
