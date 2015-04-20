# PlusAnchor jQuery Plugin

A simple jQuery plugin that scrolls to anchor links instead of instantaneously jumping to them.

## Features
* Works with with ID jumping and anchor jumping
* Supports ajax/javascript heavy sites

## Installation
Install via bower: `bower install jquery.plusanchor --save`
Alternatively, a manual installation can be done by including jQuery, jquery.easing (optional) and PlusAnchor

    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
    <script type="text/javascript" src="js/jquery.easing.1.3.js"></script>
    <script type="text/javascript" src="js/jquery.plusanchor.js"></script>
    <script type="text/javascript">
    $(document).ready(function(){

        $('body').plusAnchor({
            easing: 'easeInOutExpo',
            speed:  700
        });

    });
    </script>

## Available options
    $('body').plusAnchor({
        easing: 'swing',      // String: Anything other than "swing" or "linear" requires the easing.js plugin
        offsetTop: -20,       // Int: Top offset for anchor scrollto position. Can be positive or negative
        speed: 1000,          // Int: The speed, in miliseconds, it takes to complete a slide
        onInit: null,         // Function: Callback function on plugin initialize
        onSlide: null,        // Function: Callback function that runs just before the page starts animating
        performance: false    // Boolean: Toggles between click and delegate events.
    });

    $('body').plusAnchor(false, false); // remove plusAnchor listeners, useful for re-enabling with different settings on browser resize, etc.

## Dependencies
* >= jQuery 1.7
* >= jQuery Easing 1.3

## Changelog

### 1.1.1
* Added support for ajax sites.
* Added support to run PlusAnchor on various elements, not just the body

### 1.0.1
* Changed file names and file extentions for simplicity
* Added example HTML and CSS files to demonstrate what the script can do

### 1.0
* First official version
