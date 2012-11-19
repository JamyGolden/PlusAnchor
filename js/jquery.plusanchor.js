/*
 * jQuery PlusAnchor 1.0.7.3
 * By Jamy Golden
 * http://css-plus.com
 *
 * Copyright 2011, Jamy Golden
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */
(function($){
    $.plusAnchor = function(el, options){
        // To avoid scope issues, use 'base' instead of 'this'
        // to reference this class from internal events and functions.
        var base = this;
        // Access to jQuery and DOM versions of element
        base.el                 = el;
        base.$el                = $(el);
        base.$el.data('plusAnchor', base); // Add a reverse reference to the DOM object
        base.scrollEl           = 'body, html';
        base.initHash           = window.location.hash;
        base.offsetTop          = function( ) {

            return $('html').offset().top;

        }; // base.offsetTop()
        base.detectScrollEl     = function() {

            var curPos = base.offsetTop(),
                newPos = 0;

            $('body').animate({

                scrollTop: curPos * -1 + 1

            }, 0, function() {

                newPos = base.offsetTop();

            });
            
            // IE fails this test but scrolls on 'html', so the fallback should be html
            newPos < curPos && newPos !== 0 ? base.scrollEl = 'body' : base.scrollEl = 'html';


        }; // base.detectScrollEl()
        base.init = function(){

            base.options = $.extend({}, $.plusAnchor.defaults, options);

            base.detectScrollEl();

            // onInit callback
            if ( base.options.onInit && typeof( base.options.onInit ) == 'function' ) base.options.onInit( base );
            // End onInit callback

            base.$el.find('a[href^="#"]').click(function( e ) {
                
                e.preventDefault();
                
                var $this = $(this);
                    href = $this.attr('href'),
                    $name = $('a[name="' + $(this).attr('href').substring(1) + '"]');
                    
                if ( $(href).length ){

                    // onSlide callback
                    if ( base.options.onSlide && typeof( base.options.onSlide ) == 'function' ) base.options.onSlide( base );
                    // End onSlide callback

                    $(base.scrollEl).animate({

                        scrollTop: $(href).offset().top + base.options.offsetTop

                    }, base.options.speed, base.options.easing);

                } else if ( $name.length ){

                    // onSlide callback
                    if ( base.options.onSlide && typeof( base.options.onSlide ) == 'function' ) base.options.onSlide( base );
                    // End onSlide callback

                    $(base.scrollEl).animate({

                        scrollTop: $name.offset().top

                    }, base.options.speed, base.options.easing);

                }
            });
        }; // base.init()
        // Run initializer
        base.init();
    };
    $.plusAnchor.defaults ={
        easing: 'swing',  // Anything other than "swing" or "linear" requires the easing.js plugin
        offsetTop: 0,
        speed: 1000,     // The speed, in miliseconds, it takes to complete a slide
        onInit: null,    // Callback function on plugin initialize
        onSlide: null    // Callback function that runs just before the page starts animating
    };
    $.fn.plusAnchor = function(options){
        return this.each(function(){
            (new $.plusAnchor(this, options));
        });
    };
})(jQuery);