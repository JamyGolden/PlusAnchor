/*
 * jQuery PlusAnchor 1.0.1
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
        base.el = el;
        base.$el = $(el);
        // Add a reverse reference to the DOM object
        base.$el.data("plusAnchor", base);
        
        base.init = function(){
            base.options = $.extend({}, $.plusAnchor.defaults, options);
            $('a[href^="#"]').click(function(e){
                
                e.preventDefault();
                
                var $this = $(this);
                    href = $this.attr('href'),
                    name = $('a[name="' + $(this).attr('href').substring(1) + '"]');
                    
                if ( $(href).length ){

                    $('html, body').animate({

                        scrollTop: $(href).offset().top

                    }, base.options.speed, base.options.easing);

                }
                else if ( name.length ){

                    $('html, body').animate({

                        scrollTop: name.offset().top

                    }, base.options.speed, base.options.easing);

                }
            });
        };
        // Run initializer
        base.init();
    };
    $.plusAnchor.defaults ={
        easing: 'swing',
        speed: 1000
    };
    $.fn.plusAnchor = function(options){
        return this.each(function(){
            (new $.plusAnchor(this, options));
        });
    };
})(jQuery);