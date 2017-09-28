var http = require('http')
var fs = require('fs')

var server = http.createServer(function(req, res){
  try{
    var fileContent = fs.readFileSync(__dirname + '/static' + req.url)
    res.write(fileContent)
  }catch(e){
    res.writeHead(404, 'not found')
    res.write('<h1>404 Not Found</h1>')
  }
  res.end()
})
server.listen(8080)