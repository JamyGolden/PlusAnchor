/*
 * PlusAnchor
 * A jQuery plugin enables scrolling to anchor links instead of jumping
 * Version: "1.1.1"
 * Jamy Golden (http://twitter.com/jamygolden/)
 * https://github.com/JamyGolden/PlusAnchor
 * License: MIT
 */
!function(a){function b(b){return function(c){c.preventDefault();var d=a(this),e=d.attr("href"),f=a('a[name="'+e.substring(1)+'"]');a(e).length?(b.options.onSlide&&"function"==typeof b.options.onSlide&&b.options.onSlide(b),b.$el.animate({scrollTop:a(e).offset().top+b.options.offsetTop},b.options.speed,b.options.easing)):f.length&&(b.options.onSlide&&"function"==typeof b.options.onSlide&&b.options.onSlide(b),b.$el.animate({scrollTop:f.offset().top+b.options.offsetTop},b.options.speed,b.options.easing))}}a.plusAnchor=function(c,d){function e(){return d===!1?void f.$el.find('a[href^="#"]').off("click.plusanchor"):(f.options=a.extend({},a.plusAnchor.defaults,d),f.options.onInit&&"function"==typeof f.options.onInit&&f.options.onInit(f),void(f.options.performance?f.$el.find('a[href^="#"]').on("click.plusanchor",b(f)):f.$el.on("click",'a[href^="#"]',b(f))))}var f=this,g=document.getElementsByTagName("html"),h=document.body;f.el=c,f.$el=a(c===g||c===h?"html, body":c),f.$el.data("plusAnchor",f),e()},a.plusAnchor.defaults={easing:"swing",offsetTop:0,speed:1e3,onInit:null,onSlide:null,performance:!1},a.fn.plusAnchor=function(b){return this.each(function(){new a.plusAnchor(this,b)})}}(jQuery);