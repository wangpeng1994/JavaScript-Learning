console.log('I am index')

module.exports = 233

//require.ensure(dependencies: String[], callback: function(require), chunkName: String)

//异步加载
require.ensure([],(require)=>{ //第一个参数是依赖
	require('./index1.js') //异步加载的内容
},'dynamic') //第三个参数是导出后的名字