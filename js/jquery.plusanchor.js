/*
* PlusAnchor
* A form component library
* Version: "1.1.2"
* Jamy Golden
* https://github.com/JamyGolden/PlusAnchor
* License: MIT
*/
(function($){

    function scrollToEvent(base) {
        return function(e) {
            e.preventDefault();

            var $this = $(this); // Anchor el
            var href = $this.attr('href');
            var $name = $('a[name="' + href.substring(1) + '"]');

            if ( $(href).length ){

                // onSlide callback
                if ( base.options.onSlide && typeof( base.options.onSlide ) === 'function' ) {
                    base.options.onSlide( base );
                };

                // End onSlide callback
                base.$el.animate({
                    scrollTop: $(href).offset().top + base.options.offsetTop
                }, base.options.speed, base.options.easing);

                if (base.options.updateUrl) {
                    history.pushState(null, null, href);
                }

            } else if ( $name.length ){

                // onSlide callback
                if ( base.options.onSlide && typeof( base.options.onSlide ) === 'function' ) {
                    base.options.onSlide( base );
                };

                // End onSlide callback
                base.$el.animate({
                    scrollTop: $name.offset().top + base.options.offsetTop
                }, base.options.speed, base.options.easing);
                if (base.options.updateUrl) {
                    history.pushState(null, null, href);
                }
            }
        }
    }

    $.plusAnchor = function(el, options){
        // To avoid scope issues, use 'base' instead of 'this'
        // to reference this class from internal events and functions.
        var base = this;
        var htmlEl = document.getElementsByTagName('html');
        var bodyEl = document.body;
        // If the user selects body, make sure to use 'html, body' for
        // cross browser compatibility reasons
        base.el  = el;
        base.$el = (el === htmlEl || el === bodyEl) ? $('html, body') : $(el);
        base.$el.data('plusAnchor', base); // Add a reverse reference to the DOM object

        function _constructor() {
            var anchorSelector = options.includeCssIndication ? '.js-plus-anchor' : 'a[href^="#"]';
            
            // Check for plusanchor disable
            if (options === false) {
                base.$el.find(anchorSelector).off('click.plusanchor');
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
                base.$el.on('click', anchorSelector, scrollToEvent(base));
            } else {
                base.$el.find(anchorSelector).on('click.plusanchor', scrollToEvent(base));
            }
        }; // _constructor

        // Run initializer
        _constructor();
    };

    $.plusAnchor.defaults = {
        easing: 'swing',   // String: Anything other than "swing" or "linear" requires the easing.js plugin
        offsetTop: 0,      // Int: Top offset for anchor scrollto position. Can be positive or negative
        speed: 1000,       // Int: The speed, in miliseconds, it takes to complete a slide
        onInit: null,      // Function: Callback function on plugin initialize
        onSlide: null,     // Function: Callback function that runs just before the page starts animating
        performance: false, // Boolean: Toggles between click and delegate events.
        includeCssIndication: false, //Boolean: set to true to bind anchors with 'js-plus-anchor' CSS class name only
        updateUrl: false
    };

    $.fn.plusAnchor = function(options){
        return this.each(function(){
            (new $.plusAnchor(this, options));
        });
    };
})(jQuery);
