const path = require('path'), //引入node 原生模块path，用来生成与当前系统相适应的绝对路径
  ExtractTextPlugin = require('extract-text-webpack-plugin'), //抽取 CSS 的插件
  WebpackNotifierPlugin = require('webpack-notifier'); //webpack 编译提示插件

  let base = {  //下面的 entry 入口字段，可以是字符串、对象、数组、函数等 ，这里使用 对象形式
    index: './src/js/app/index.js'
  }

  module.exports = {

    devtool: 'source-map', //配合 target 用来生成source-map 文件，以便 开发调试 debug 等， devtool 意指 开发工具
    target: 'web',
    entry: base,
    output: {    //指定输出目录，和文件名
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js'
    },

    resolve: {  //resolve字段最常用的就是 alias （别名）属性，用来把一些冗长的路径替换为简单的字符，以便js中引入模块时更简洁
      alias: {
        gotop: path.resolve(__dirname, 'src/js/com/gotop.js'),
        carousel: path.resolve(__dirname, 'src/js/com/carousel.js'),
        waterfall: path.resolve(__dirname, 'src/js/com/waterfall.js')
      }
    },

    plugins: [  //在最开始 require 插件后，这里还要在 plugins 字段中，创建插件实例
      new WebpackNotifierPlugin({
        title: 'Webpack 编译成功',
        alwaysNotify: true
      }),
      new ExtractTextPlugin({
        filename: "[name].css",
        disable: false,
        allChunks: true
      })
    ],

    module: {  //webpack 2 对比 webpack 1 在 module 字段这里做了改进，更符合逻辑和语义化
      rules: [
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({  //以便在这里使用插件对象定义的的方法
            fallback: 'style-loader',
            use: {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            }
          })
        }
      ]
    }

  }