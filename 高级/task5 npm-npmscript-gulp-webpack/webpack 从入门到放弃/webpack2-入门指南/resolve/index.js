console.log('I am index')

// import test  from 'test';
const test = require('test') //因为webpack.config.js 里做了 resolve.alias 别名配置
class S {
	constructor(){
		this.a = 'a '
	}
}
console.log(test());
