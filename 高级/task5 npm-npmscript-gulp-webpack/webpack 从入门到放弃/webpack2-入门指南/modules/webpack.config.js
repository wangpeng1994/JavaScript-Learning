
const path = require('path');
let base = {
  index: './index.js',
};

//webpack2 提供了多种配置方案


module.exports = {
  entry: base,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: { //webpack是基于module构建的，每次碰到文件，都会走一遍 rules，先预处理一遍，再交给webpack继续打包
    rules: [
      // Conditions, Results and nested Rules.
      {
        test: /\.jsx?$/, //先以文件名区分

        exclude: [  //不包括 node_modules 文件夹，不然里面那么多 js 都转码了
          'node_modules'
        ],
        // flags to apply these rules, even if they are overridden (advanced option)
        // loader: "babel-loader",
        // rule.use是数组形式和rule.loaders是它的别名
        use: [{
          loader: "babel-loader",
        }]
      },
    ]
  }
};
