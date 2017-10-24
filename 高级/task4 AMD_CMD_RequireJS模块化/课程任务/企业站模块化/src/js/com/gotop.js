/* 定义gotop回到顶部模块 */

define(function(){

  function GoTop(){
    this.createNode()
    this.bindEvent()
  }

  GoTop.prototype.bindEvent = function(){
    var self = this
    this.target.style.display = 'none' //先隐藏
    this.target.onclick = function(){
      window.scrollTo(0, 0)         //当点击按钮时，横纵滚动条全部复位
    }
    window.onscroll = function(){
      if(this.scrollY > 500){       //当滚动的时候，距离大于200px了，再显示gotop按钮
        self.target.style.display = 'block'
      }else{
        self.target.style.display = 'none'
      }
    }
  }

  GoTop.prototype.createNode = function(){
    var target = document.createElement('div')
    target.innerText = '回到顶部'
    target.classList.add('goTop')
    document.querySelector('body').appendChild(target)
    this.target = target
  }

  //new GoTop()
  
  return GoTop
})