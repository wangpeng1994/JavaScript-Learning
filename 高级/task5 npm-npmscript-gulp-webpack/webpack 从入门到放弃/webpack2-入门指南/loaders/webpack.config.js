
const path = require('path'),
    webpack = require("webpack"),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    WebpackNotifierPlugin = require('webpack-notifier');


let base = {
	    index:'./index.js',
};

module.exports = {
  // https://webpack.js.org/configuration/devtool/#devtool
  devtool:'source-map',
  // https://webpack.js.org/configuration/target/#target
  target:"web",
  entry:base,
  output: {
  	path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  resolve:{
    alias:{
        test:path.resolve(__dirname,'test/test.js')
    }
  },
  plugins:[
     new ExtractTextPlugin({
                filename: "[name].css",
                disable: false,
                allChunks: true
            })
    ],
  module:{
    //entry => loaders ==> webpack ==> output  每个文件，webpack都会认为是个资源，会通过 loader 进行预处理
    rules:[
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                use: {
                  loader:'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",  
                    use:{
                        loader:'css-loader',
                        options: {
                           sourceMap: true
                        }
                    }
                })
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:['css-loader',{
                        loader:'less-loader',
                        options: {
                           sourceMap: true
                        }
                    }]
                })
            },
            {
                test: /\.scss$/,
                //use: ['style-loader','css-loader', 'sass-loader'] //这是不从js中抽离出css的写法
                use: ExtractTextPlugin.extract({
                    fallback:'style-loader', //fallback:编译后用什么loader来提取css文件
                    use:['css-loader',{   //到了css-loader这一步，dist中就会有css文件了
                        loader:'sass-loader',
                        options: {
                           sourceMap: true
                        }
                    }]
                })
            },
            {
                test: /\.(png|jpg|jpeg|gif|woff|woff2|ttf|eot|svg|swf)$/,
                use: {
                    loader:'file-loader',
                    options:{
                        name:'[name]_[sha512:hash:base64:7].[ext]'
                    }
                }
            },
            {
                test: /\.html/,
                use:{
                    loader:"html-loader",
                    options:{
                        minimize: false,
                        attrs:false
                    }
                }
            }
    ]
  }
};


 /*
sass-loader     compiles Sass to CSS    将sass 编译成 css
css-loader      translates CSS into CommonJS  使你能够使用类似@import 和 url(…)的方法实现 require()的功能；
style-loader    creates style nodes from JS strings    将所有计算后的样式加入页面中；
　　
二者组合在一起使你能够把样式表嵌入webpack打包后的JS文件中。
  
 
 */