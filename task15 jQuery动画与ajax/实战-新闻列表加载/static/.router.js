function setRouter(app){ 
 var router = app; 

//假设域名是localhost, 端口是8080

//更多详细使用方法参考 http://www.expressjs.com.cn/guide/routing.html





router.get('/getNews', function(req, res){
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

  var pageIndex = req.query.page
  var len = 3

  var retNews = news.slice(pageIndex*len, pageIndex*len+len)//0: 0~3,   1:3~6

  res.send({
    status: 0,
    data: retNews
  })
})















/**
 * 当 http://localhost:8080/getInfo 的GET请求到来时被下面匹配到进行处理
 * 发送JSON格式的响应数据 {name: 'ruoyu'}
 */
router.get('/getInfo', function(req, res) {
  res.send({name: 'ruoyu'})  
  // info = require(./db.json)
  // res.send(info)
})



/**
 * 当 http://localhost:8080/getFriends 的GET请求到来时被下面匹配到进行处理
 * 通过req.query获取请求的参数对象 
 * 通过 req.send发送响应
 */
router.get('/getFriends', function(req, res) {
	var username = req.query.username // 通过 req.query获取请求参数
	var friends
  
  //根据请求参数mock数据
  switch (username){
  	case 'ruoyu':
  		friends = ['小米', '小刚']
  		break
  	case 'hunger':
  		friends = ['小谷', '小花']
  		break;
  	default:
  		friends = ['没有朋友']
  }
  res.send(friends)
})


/**
 * 当 http://localhost:8080/comment 的GET请求到来时被下面匹配到进行处理
 * 通过req.body获取post请求的参数对象 
 * 通过 req.send发送响应
 */
router.post('/comment', function(req, res) {
  console.log(req.body.comment) // 可通过req.body获取 post 提交的参数
  res.send({status: 'ok'})
})

/**
 * 使用 router.use可处理所有类型的请求
*/
router.use('/hello', (req, res)=>{
  res.send('world')
})


/**
 * 设置 header 可以处理跨域请求
*/
router.use('/hi', (req, res)=>{
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.send('world')
})

}
 module.exports.setRouter = setRouter