const path = require('path')

module.exports = {
  entry: {
    index1: './index1.js',
    index2: './index2.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}