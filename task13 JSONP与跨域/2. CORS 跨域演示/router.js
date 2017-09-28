app.get('/getNews', function(req, res){

  var news = [
    "山无陵，江水为竭。冬雷震震，夏雨雪。天地合，乃敢与君绝",
    "十年生死两茫茫，不思量，自难忘",
    "山有木兮木有枝，心悦君兮君不知",
    "平生不会相思，才会相思，便害相思",
    "只愿君心似我心，定不负相思意",
    "玲珑骰子安红豆，入骨相思知不知",
    "雨打梨花深闭门，忘了青春，误了青春",
    "人面不知何处去，桃花依旧笑春风"
  ]
  
  var data = []
  for(var i=0; i<3; i++){
    var index = parseInt(Math.random()*news.length)
    data.push(news[index])
    news.splice(index, 1) //为了避免随机到重复元素，所以push完一个就删除一个
  }

  res.header('Access-Control-Allow-Origin', 'http://wangpeng.com:8080')
  //res.header('Access-Control-Allow-Origin', '*')  // 星号 *代表来自任意地址都被访问，不受浏览器同源策略限制
  res.send(data)
  
})