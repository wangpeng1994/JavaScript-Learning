
const path = require('path'),
    webpack = require("webpack"),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"), //抽取css单独成文件（不再嵌入js中最后在页面标签里，而是变成通过link标签引入css文件）
    WebpackNotifierPlugin = require('webpack-notifier'); //编译完成后的气泡提醒



let base = {
	    index:'./index.js',
        common:"./common.js"
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
  //插件 plugins 是注册 hook 到 webpack 的整个编译过程中的某个阶段
  // webpack lifecycle :before-complitaion run done =>
  plugins:[
            new webpack.ProvidePlugin({ //这是 webpack 原生内置的插件
                $: 'jquery'  // $就代表了 jquery模块，相当于占位符,注入了变量
            }),
            new WebpackNotifierPlugin({
                title: 'Webpack 编译成功',
                contentImage: path.resolve(process.cwd(), './img/nice.png'),
                alwaysNotify: true
            }),
            new ExtractTextPlugin({
                filename: "[name].css",
                disable: false,
                allChunks: true
            }),
            //把公共模块都抽取到 common 里，因此html中需要先引入 common.js， 然后再引入 index.js
            new webpack.optimize.CommonsChunkPlugin({  //这也是 webpack 原生内置的插件,属于优化性质的插件
                name: 'common',
                minChunks: Infinity
            })
  ],
  module:{
    rules:[
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                use: 'babel-loader'
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
                use: ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:['css-loader',{
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
