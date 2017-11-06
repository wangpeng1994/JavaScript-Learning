const path = require('path')

let base1 = {
  index1: './index1.js',
  index2: './index2.js'

}
let base2 = './index1.js' //此时 webpack 输出了默认名字 main.bundle.js

module.exports = {
  entry: base1,
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}