#!/usr/bin/env node

var axios = require('axios')
var data = {}

if(process.argv[2]){
  data.params = {
    location: process.argv[2] //仅支持拼音
  }
  getCityid() 
}else{
  axios.get('https://weixin.jirengu.com/weather/ip')
    .then(function(response){
      data.params = {
        location: response.data.data
      }
      getCityid()
    })
    .catch(function(error){
      console.log(error)
    })
}

function getCityid(){
  axios.get('https://weixin.jirengu.com/weather/cityid', data)
  .then(function(response){
    getWeatherByCityid(response.data.results[0].id)
  }).catch(function(error){
    console.log(error)
  })
}

function getWeatherByCityid(cityid){
  axios.get('https://weixin.jirengu.com/weather/now?cityid=' + cityid)
  .then(function(response){
    var weather = response.data.weather[0]
    console.log('---------------------------------')
    console.log(weather.city_name + ' ' + weather.future[0].day + ' ' +weather.future[0].date + ' (实时：' + weather.now.temperature + '℃ )')
    console.log(weather.future[0].low + ' ~ ' + weather.future[0].high + '℃')
    console.log(weather.now.text + ', ' + weather.now.wind_direction + '风' + weather.now.wind_scale + '级')
    console.log('---------------------------------')
  })
  .catch(function(error){
    console.log(error)
  })
}

//这个接口有点奇特，需要通过 pinyin 或者 经纬度 或者 ip，获取到 cityid， 然后接着通过 cityid 获取天气，所以有点绕  API介绍参考这个：http://api.jirengu.com

//以上思路：

// 1. 如果有参数（这个接口只支持拼音参数），那么通过 process.argv[2] 传入到 data中，然后再把data传入到 axios，关于axios可以到 npm上，看使用方法，这个工具的作用就是 发送请求，request，和 jq中的ajax目的是一样的。 

//2. 如果没有参数就去直接执行，那么会先通过某个接口获取当前ip，然后把得到的ip再传入到 data中，后面一样。

//3. 然后就是根据 命令行中第二个参数，或者ip进一步获得 cityid,

//4. 最后根据cityid 获得天气