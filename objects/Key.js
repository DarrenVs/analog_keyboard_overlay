



// Default restorepoint properties
defaultKeyProperties = {
    keyCode: "KeyH",
    keyText: "SampleText",
	button: -1,
    axis: 0,
	linkedAxis: -1,
    revertedAxis: false,
    size: 100,
    multiplier: 1,
    deadzone: 0.2,
	backgroundImage: new Image(),
	fillStyle: "rgba(255, 255, 255, 0.5)",
	fillStyleBackground: "rgba(37, 37, 37, 0.43)",
	fillSize: 85,
}



// Thumbstick object
function Key(x, y, width, height, properties) {


	// Framework properties
	this.x = x; this.y = y;
	this.width = width; this.height = height;
    this.defaultProperties = defaultKeyProperties;
    this.className = "Key";

	// Object properties
	applyProperties(this, defaultKeyProperties);
	// Custom object properties
	applyProperties(this, properties);

	// Object values
    this.value = 0;
    this._previousValue = 0;
}


// Update loop
Key.prototype.update = function (delta) {

	var value = 0;

	// Get keyboard input
	value += keyboard[this.keyCode] ? 1 : 0;

	// Get gamepad input
	for (var id in gamepads) {
		var gamepad = gamepads[id];
		if (gamepad !== null && gamepad.axes ) {
			
			if (gamepad.axes[this.axis]
			&& (this.revertedAxis === true && gamepad.axes[this.axis] < 0)
			|| (this.revertedAxis === false && gamepad.axes[this.axis] > 0)) {
				if (gamepad.axes[this.linkedAxis]) {

					value += Math.abs(gamepad.axes[this.axis])
						* (1.2 + Math.sin(Math.PI * Math.abs(gamepad.axes[this.linkedAxis])) / Math.PI); // quick fix to hide circular joystick
				} else {

					value += Math.abs(gamepad.axes[this.axis])
				}
			}
		}
		if (gamepad !== null && gamepad.buttons) {

			if (gamepad.buttons[this.button]) {
				
				value += gamepad.buttons[this.button].value
			}
		}
	}

	// Update input
	this.value = Math.max(Math.min(value*this.multiplier, 1), 0);

	// Update position
	return true //Math.abs(this._previousValue - this.value) > this.deadzone;
}


// Draw function
Key.prototype.draw = function (canvas, ctx) {

	var fillOffset = -(this.fillSize-this.size)*.5

	// Fill background
    ctx.beginPath();
    canvas_fill_rec(ctx, fillOffset, fillOffset, this.fillSize, this.fillSize, {fillStyle:this.fillStyleBackground});

	// Fill value
    ctx.beginPath();
    canvas_fill_rec(ctx, fillOffset, fillOffset, this.fillSize, this.fillSize * this.value, {fillStyle:this.fillStyle});


	ctx.drawImage(
		this.backgroundImage,
		0, 0,
		this.backgroundImage.width, this.backgroundImage.height,
		0, 0,
		this.size, this.size
	)

    // Print key text
    canvas_text(ctx, this.size*.5, this.size*.5, this.keyText, {textAlign:"center",fillStyle:"white",font:"30px Lucida Console"});
}
