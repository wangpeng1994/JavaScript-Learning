var http = require('http')
var path = require('path')
var url = require('url')
var fs = require('fs')

http.createServer(function(req, res){
  var pathObj = url.parse(req.url, true)
  console.log(pathObj)
  
  switch(pathObj.pathname){
    case '/getNews':
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
      res.setHeader('Content-Type', 'text/json; charset=utf-8')
      //res.setHeader('Access-Control-Allow-Origin', 'http://wangpeng.com')
      res.setHeader('Access-Control-Allow-Origin', '*') //注意如果这样，那么file协议也能直接请求到
      /* 注意，这里是JSONP 处理的关键地方 */
      if(pathObj.query.callback){
        res.end(pathObj.query.callback + '(' + JSON.stringify(data) + ')')
      }else{
        res.end(JSON.stringify(data))
      }
      console.log(news)
      break;
   
      default:
      if(pathObj.pathname === '/'){
        pathObj.pathname += 'index.html'
      }
      console.log(pathObj)
      fs.readFile(path.join(__dirname, pathObj.pathname), function(err, data){
        if(err){
          res.writeHead(404, 'not found')
          res.end('<h1>404 Not Found</h1>')
        }else{
          res.end(data)
        }
      })
  }
}).listen(80)


