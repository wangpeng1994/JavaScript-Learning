var http = require('http')
var url = require('url')
var fs = require('fs')

http.createServer(function(req, res){
  var pathObj = url.parse(req.url, true)
  console.log(pathObj)

  switch(pathObj.pathname){
    case '/':
      res.setHeader('Content-Type', 'text/html; charset=utf-8')
      res.end(fs.readFileSync(__dirname + '/index.html'))
      break;
    case '/getNews':
      var news = [
        {
          link: 'https://xw.qq.com/cmsid/MIL2017092701403603',
          img: 'https://inews.gtimg.com/newsapp_bt/0/2098930994/1000',
          title: '中国都建第二艘航母了 却还没造出这种船',
          brif: '技日报北京9月26日电 （记者陈瑜）“雪龙2”号...'
        },
        {
          link: 'https://xw.qq.com/cmsid/20170927A05H4P00',
          img: 'https://inews.gtimg.com/newsapp_bt/0/2100344599/1000',
          title: '美防长刚飞抵阿富汗，就遭到30枚火箭弹狂轰滥炸',
          brif: '当地时间9月27日，美国国防部长马蒂斯（James Mattis）...'
        },
        {
          link: 'https://xw.qq.com/cmsid/20170927A02LE400',
          img: 'https://inews.gtimg.com/newsapp_bt/0/1843555158/1000',
          title: '中国核潜艇能潜多深？曾潜水下230米发生巨响漏水变形',
          brif: '上世纪60年代至80年代，是人类历史上核潜艇发展的黄金30年...'
        },
        {
          link: 'https://xw.qq.com/cmsid/20170927A010B900',
          img: 'https://inews.gtimg.com/newsapp_bt/0/2098895862/1000',
          title: '鲜为人知：三大战役，解放军在火力上也压倒了国民党军',
          brif: '这是解放军第四野战军用火车装载大批坦克进入山海关的镜头...'
        },
        {
          link: 'https://xw.qq.com/cmsid/20170927A004OB00',
          img: 'https://inews.gtimg.com/newsapp_bt/0/2098560810/1000',
          title: '严酷的苏联红军第270号命令：懦夫和逃兵必须被彻底清除',
          brif: '1941年6月22日凌晨4时30分，在北起波罗的海、南至黑海的...'
        },
        {
          link: 'https://xw.qq.com/cmsid/20170927A04ZRL00',
          img: 'https://inews.gtimg.com/newsapp_bt/0/2100150975/1000',
          title: '1个邮政袋装15万封信，二战美国的战地家书有多高科技？',
          brif: '提到战地家书，我们可能眼前会闪现战争片中的经典画面...'
        },
        {
          link: 'https://xw.qq.com/cmsid/MIL2017092701403603',
          img: 'https://inews.gtimg.com/newsapp_bt/0/2098930994/1000',
          title: '中国都建第二艘航母了 却还没造出这种船',
          brif: '技日报北京9月26日电 （记者陈瑜）“雪龙2”号...'
        },
        {
          link: 'https://xw.qq.com/cmsid/20170927A05H4P00',
          img: 'https://inews.gtimg.com/newsapp_bt/0/2100344599/1000',
          title: '美防长刚飞抵阿富汗，就遭到30枚火箭弹狂轰滥炸',
          brif: '当地时间9月27日，美国国防部长马蒂斯（James Mattis）...'
        },
        {
          link: 'https://xw.qq.com/cmsid/20170927A02LE400',
          img: 'https://inews.gtimg.com/newsapp_bt/0/1843555158/1000',
          title: '中国核潜艇能潜多深？曾潜水下230米发生巨响漏水变形',
          brif: '上世纪60年代至80年代，是人类历史上核潜艇发展的黄金30年...'
        },
        {
          link: 'https://xw.qq.com/cmsid/20170927A010B900',
          img: 'https://inews.gtimg.com/newsapp_bt/0/2098895862/1000',
          title: '鲜为人知：三大战役，解放军在火力上也压倒了国民党军',
          brif: '这是解放军第四野战军用火车装载大批坦克进入山海关的镜头...'
        },
        {
          link: 'https://xw.qq.com/cmsid/20170927A004OB00',
          img: 'https://inews.gtimg.com/newsapp_bt/0/2098560810/1000',
          title: '严酷的苏联红军第270号命令：懦夫和逃兵必须被彻底清除',
          brif: '1941年6月22日凌晨4时30分，在北起波罗的海、南至黑海的...'
        },
        {
          link: 'https://xw.qq.com/cmsid/20170927A04ZRL00',
          img: 'https://inews.gtimg.com/newsapp_bt/0/2100150975/1000',
          title: '1个邮政袋装15万封信，二战美国的战地家书有多高科技？',
          brif: '提到战地家书，我们可能眼前会闪现战争片中的经典画面...'
        }
      ]
      var pageIndex = pathObj.query.page
      var len = 3
      var retNews = news.slice(pageIndex*len, pageIndex*len+len)
      res.setHeader('Content-Type', 'text/plain; charset=utf-8')
      res.end(JSON.stringify({
        status: 0,
        data: retNews
      }))
      break;
    default:
      res.end('404 Not Found')
  }
  console.log('visit http://localhost:8080')
}).listen(8080)