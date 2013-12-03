# Minimal jQuery Splitter 

An mininal jQuery Splitter plugin. Only 1.5KB(unminified).

## Sample

HTML:
```html
<div id="#mySplitter" class="split-panes horizontal">
	<div class="split-pane1" style="min-width: 200px">Pane 1</div>
	<div class="split-handler"></div>
	<div class="split-pane2" style="min-width: 100px">
	  <div class="split-panes vertical">
			<div class="split-pane1">Pane 2</div>
	  	<div class="split-handler"></div>
	  	<div class="split-pane2" style="min-height: 100px">Pane 3</div>
		</div>
	</div>
</div>
```

Javascript:
```javascript
$('#mySplitter').splitter();
```
 