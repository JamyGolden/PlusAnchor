/*
 * jQuery PlusAnchor 1.1.0
 * By Jamy Golden
 * http://css-plus.com
 *
 * Copyright 2015, Jamy Golden
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */
(function($){

    function scrollToEvent(base) {
        return function(e) {
            e.preventDefault();

            var $this = $(this);
            var href = $this.attr('href');
            var $name = $('a[name="' + href.substring(1) + '"]');

            if ( $(href).length ){

                // onSlide callback
                if ( base.options.onSlide && typeof( base.options.onSlide ) === 'function' ) {
                    base.options.onSlide( base );
                };

                // End onSlide callback
                $(base.scrollEl).animate({
                    scrollTop: $(href).offset().top + base.options.offsetTop
                }, base.options.speed, base.options.easing);

            } else if ( $name.length ){

                // onSlide callback
                if ( base.options.onSlide && typeof( base.options.onSlide ) === 'function' ) {
                    base.options.onSlide( base );
                };

                // End onSlide callback
                $(base.scrollEl).animate({
                    scrollTop: $name.offset().top + base.options.offsetTop
                }, base.options.speed, base.options.easing);

            }
        }
    }

    $.plusAnchor = function(el, options){
        // To avoid scope issues, use 'base' instead of 'this'
        // to reference this class from internal events and functions.
        var base = this;
        // Access to jQuery and DOM versions of element
        base.el                 = el;
        base.$el                = $(el);
        base.scrollEl           = 'body, html';
        base.$el.data('plusAnchor', base); // Add a reverse reference to the DOM object
        base.init = function(){

            // Check for plusanchor disable
            if (options === false) {
                base.$el.find('a[href^="#"]').off('click.plusanchor');
                return;
            };

            // Extend options with user preferences
            base.options = $.extend({}, $.plusAnchor.defaults, options);

            // onInit callback
            if ( base.options.onInit && typeof( base.options.onInit ) === 'function' ) {
                base.options.onInit( base );
            };
            // End onInit callback

            if (!base.options.performance) {
                base.$el.on('click', 'a[href^="#"]', scrollToEvent(base));
            } else {
                base.$el.find('a[href^="#"]').on('click.plusanchor', scrollToEvent(base));
            }
        }; // base.init()

        // Run initializer
        base.init();
    };

    $.plusAnchor.defaults = {
        easing: 'swing',   // String: Anything other than "swing" or "linear" requires the easing.js plugin
        offsetTop: 0,      // Int: Top offset for anchor scrollto position. Can be positive or negative
        speed: 1000,       // Int: The speed, in miliseconds, it takes to complete a slide
        onInit: null,      // Function: Callback function on plugin initialize
        onSlide: null,     // Function: Callback function that runs just before the page starts animating
        performance: false // Boolean: Toggles between click and delegate events.
    };

    $.fn.plusAnchor = function(options){
        return this.each(function(){
            (new $.plusAnchor(this, options));
        });
    };
})(jQuery);
