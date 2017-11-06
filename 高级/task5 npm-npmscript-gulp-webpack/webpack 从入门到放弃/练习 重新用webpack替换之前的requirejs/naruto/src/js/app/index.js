/**
 * 首页功能 
 */


//AMD规范
define(['jquery', 'gotop', 'carousel', 'waterfall'], function($, GoTop, Carousel, WaterFall){
  new GoTop()
  Carousel.init($('.carousel'))
  new WaterFall()

  $(window).on('scroll', function(){
    if ($(this).scrollTop() > 900){
      $('nav').css('display', 'none')   
    }
    else{
      $('nav').css('display', 'block')
    }
  })

})