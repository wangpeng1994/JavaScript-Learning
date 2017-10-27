//我的 package.json 配置文件里，指向index.js，但实际上我的包里使用了marked --别人的包，做了赋值后，再把它暴露出去 

//但是在自己的包里用别人的包之前 需要命令行里 $ npm install --save marked
//加上 --save 参数的意义，就是本地安装的同时（毕竟如果你要在本地运行，你总要下载依赖的包吧,marked被写入配置文件中的 dependencies 中，指明当前包的依赖
// "dependencies": {
//  "marked": "^0.3.6"
// }
//一般 还会同时发布到github上，但是node_modules文件这么大，再传一份上去浪费，于是只在 配置文件中写明依赖即可
//当别人从github get到源码了，想要运行你的代码，还指望别人把这个包中所有依赖的包通过 npm install 挨个下载吗
//当然不需要挨个下载了，因为配置文件里写明了依赖的包，ta只需要下载后，当前目录里执行 npm install，npm自会找到目录里的package.json配置文件，然后自动下载依赖的包
var marked = require('marked')

var str = marked('# Hello xiaofeng')
console.log('haha...' + str)

module.exports = str