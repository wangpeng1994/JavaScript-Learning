/* 定义waterfall瀑布流新闻模块 */

define(['jquery'], function($){

  function WaterFall(){
    this.init()
  }

  WaterFall.prototype = {
    init: function(){
      this.nodeWidth = $('.waterfall>.item').outerWidth(true)
      this.count = 40
      this.colSumHeight = []
      this.imgWidth = $('.waterfall>.item').width()
      this.getResult(this.count)
      this.bind()
    },

    bind: function(){
      var self = this
      $('.wrap>#load').on('click', function(){
        if(this.clock){
          clearTimeout(this.clock)
        }
        this.clock = setTimeout(function(){
            self.getResult(self.count) //count本例中是固定20张
        }, 500)
      })
    },

    getResult: function(num){
      var arrItem = this.getItem(num)
      var self = this
      $.each(arrItem, function(idx, item){ //遍历数组每一项（这里的数组不是后端返回的，而是拼装DOM时，顺便放进了数组里）
        $(item).find('img').on('load', function(){
          $('.waterfall').append($(item)) //append单个item
          self.waterFallPlace() //waterfall单个item
        })
      })
    },

    getItem: function(num){
      var arrItem = []
      for(var i = 0; i < num; i++){
        var randomQuery = Math.random()
        var imgHeight = this.imgWidth/4 + 50*Math.floor(1 + Math.random()*5)
        var item = `
            <li class="item">
              <img src="https://unsplash.it/${this.imgWidth}/${imgHeight}?random&${randomQuery}" alt="">
            </li>
          `
          arrItem.push(item)
      }
      return arrItem
    },

    waterFallPlace: function(){
      var self = this
      var colNum = 5  //指定5列
      for(var i = 0; i < colNum; i++){ //初始化高度数组
        this.colSumHeight[i] = 0
      }

      $('.waterfall>.item').each(function(){
        var minSumHeight = Math.min.apply(null, self.colSumHeight) //使用apply才能传入数组，否则参数是单个列写的
        var idx = self.colSumHeight.indexOf(minSumHeight) //找到最小高度列的索引值
        $(this).css({
          top: minSumHeight,
          left: self.nodeWidth*idx,
          opacity: 1
        })
        self.colSumHeight[idx] += $(this).outerHeight(true)
        $('.waterfall').height(Math.max.apply(null, self.colSumHeight)) //更新一下waterfall的高度（取决于高度数组最大的高度）
      })
    }

  }

  // new WaterFall()

  return WaterFall

})