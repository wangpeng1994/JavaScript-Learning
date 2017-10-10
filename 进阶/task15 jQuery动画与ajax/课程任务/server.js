var http = require('http')
var path = require('path')
var url = require('url')
var fs = require('fs')

http.createServer(function(req, res){
  var pathObj = url.parse(req.url, true)
  console.log(pathObj)
  switch(pathObj.pathname){
    case '/getNews':
      // var news = [
      //   '内容1',
      //   '内容2',
      //   '内容3',
      //   '内容4'
      // ]
      console.log(pathObj.query.len)
      var news = []
      var a = pathObj.query.start
      for(var i = 0; i < pathObj.query.len; i++){
        news.push('内容'+ a +'')
        a++;
      }
      res.setHeader('Content-Type', 'text/json; charset=utf-8')
      setTimeout(function(){
        res.end(JSON.stringify(news))
      }, 1000)
      
      break;
    
    case '/favicon.ico':
      break;

    default:
      if(pathObj.pathname === '/'){
        pathObj.pathname += 'index.html'
      }
      fs.readFile(path.join(__dirname, pathObj.pathname), function(err, data){
        if(err){
          console.log('读取文件异常或找不到')
          res.end('<h1>404 Not Found</h1>')
        }else{
          res.end(data)
        }
      })
  }
  
}).listen(8080)
console.log('visit http://localhost:8080')