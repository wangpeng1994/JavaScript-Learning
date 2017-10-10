// 服务端 router.js

app.get('/loadMore', function(req, res){

  var curIdx = req.query.index //获取请求的 index参数
  var len = req.query.length //获取请求的 length参数
  var data = []

  for(var i = 0; i < len; i++){ //伪造你要的数据
    data.push('十万个冷笑话' + (parseInt(curIdx) + 1 + i))
  }
  setTimeout(function(){
    res.send(data)
  }, 3000)
 
})