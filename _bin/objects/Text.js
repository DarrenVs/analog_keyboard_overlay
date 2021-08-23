



// Default restorepoint properties
defaultTextProperties = {
	text: "Sample text",
	textStyle: {textAlign:"center",fillStyle:"black",font:"30px Lucida Console"},
	shouldStroke: false,
}



// Text object
function Text(x, y, width, height, properties) {

	applyProperties(this, properties);

	// Framework properties
	this.x = x; this.y = y;
	this.width = width; this.height = height;
    this.defaultProperties = defaultTextProperties;
    this.className = "Text";

	// Object properties
	applyProperties(this, defaultTextProperties);
	// Custom object properties
	applyProperties(this, properties);

	// Object values
}


// Update loop
Text.prototype.update = function (delta) {

}

// Draw function
Text.prototype.draw = function (canvas, ctx) {


    // Print key text
    ctx.beginPath();
    canvas_text(ctx, 0, 0, this.text, this.textStyle);
}
