# PlusAnchor jQuery Plugin

A simple jQuery plugin that scrolls to anchor links instead of instantaneously jumping to them.

## Features
* Works with with ID jumping and anchor jumping

## Usage instructions

Place the following in your &lt;head&gt; section.

	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
	<script type="text/javascript" src="js/jquery.easing.1.3.js"></script>
	<script type="text/javascript" src="js/jquery.plusanchor.js"></script>
	<script type="text/javascript">
	$(document).ready(function(){

		$(document).plusAnchor({
			easing: 'easeInOutExpo',
			speed: 	1000
		});

	});
	</script>

## Available options
	$(document).plusAnchor({
        easing: 'swing', 	// The easing method, defaults are 'swing' and 'linear'. Anything else requires the easing.js plugin
        speed:  1000 		// The amount of time, in milisecons, it takes to complete a transition
    });

## Changelog

### Version 1

* First official version