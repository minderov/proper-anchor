# Proper HTML anchor
The usual HTML anchor has several flaws:
* It is difficult for user to keep track where exactly the link has moved the screen
* The anchor appears at the very top of the screen. It is an awkward position to start reading from
* When the anchor is near the bottom of the webpage, there is no way to comprehend where the anchor is

The Proper Anchor tackles these flaws by showing the content in the middle of the screen and highlighting it

### [DEMO](http://minderov.com/proper-anchor)

## Setup
```html
<!-- Dependencies -->
<script src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
<!-- Proper Anchor -->
<script src="dist/proper-anchor.js"></script>
<link href="dist/proper-anchor.css" rel="stylesheet"/>
<script>
	$('.anchorLink').properAnchor();
</script>
```

## Advanced features
### `changeUrl (False)`
The anchor works smoothly now. The link changing (https://domain.com/example#the-anchor) is removed. Switch to "true" to revert the changes.

### `scrollDuration (400)`
Duration of scrolling to the anchor (ms)

### `highlight (True)`
Determines if the anchor element will be highlighted as defined in proper-anchor.css

### `scrollToCenter (True)`
The anchor element will be positioned slightly higher than the center of the browser's window on two conditions. scrollToCenter must be set to "true" and the anchor element cannot be too close to the bottom of the page. Otherwise it will follow the default behaviour and be positioned at the top of the page.

## License
MIT License
